import {
  Stack,
  Avatar,
  Code,
  Button,
  Text,
  Center,
  Loader,
} from "@mantine/core";
import { useSession } from "next-auth/react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { get } from "src/modules/reputation/get";
import { create } from "src/modules/userConnections/create";
import { destroy } from "src/modules/userConnections/destroy";
import { getConnectionByUsers } from "src/modules/userConnections/getConnectionByUsers";
import { getMyConnections } from "src/modules/userConnections/getMyConnections";

export default function FollowProfile({
  userId,
  name,
  handle,
  username,
}: Props) {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const getUserConnectionByUserIdArgs: Parameters<
    typeof getConnectionByUsers
  >[0] = {
    fromUserId: session?.user.id || -1,
    toUserId: userId,
  };
  const { data: userConnectionData, isFetching: isFetchingFollowStatus } =
    useQuery(
      [getConnectionByUsers.key, getUserConnectionByUserIdArgs],
      () => getConnectionByUsers(getUserConnectionByUserIdArgs),
      {
        enabled: !!session && session!.user.id !== userId,
      }
    );

  const { mutate: createConnection, isLoading: isLoadingCreateConnection } =
    useMutation(
      async () => {
        await create({
          toUserId: userId,
          session: session!,
        });
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries([getConnectionByUsers.key]);
          await queryClient.invalidateQueries([getMyConnections.key]);
          await queryClient.invalidateQueries([get.key]);
        },
      }
    );

  const { mutate: destroyConnection, isLoading: isLoadingDestroyConnection } =
    useMutation(
      async () => {
        userConnectionData &&
          (await destroy({
            userConnectionId: userConnectionData?.id,
            session: session!,
          }));
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries([getConnectionByUsers.key]);
          await queryClient.invalidateQueries([getMyConnections.key]);
          await queryClient.invalidateQueries([get.key]);
        },
      }
    );

  if (isFetchingFollowStatus || !session) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Stack align="center">
      <Avatar
        src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
        alt="Avatar image"
        radius="xl"
        sx={() => ({ flexShrink: 0 })}
        size="lg"
      />
      <Text weight={500} size="lg">
        {name}
      </Text>
      <Code>{handle}</Code>
      <Button
        sx={() => ({ width: "100%" })}
        loading={
          isLoadingCreateConnection ||
          isFetchingFollowStatus ||
          isLoadingDestroyConnection
        }
        disabled={userId === session.user.id}
        onClick={() =>
          userConnectionData === null ? createConnection() : destroyConnection()
        }
      >
        {userConnectionData === null ? "Follow" : "Un-follow"}
      </Button>
    </Stack>
  );
}

type Props = {
  userId: number;
  name: string;
  handle: string;
  username: string;
};
