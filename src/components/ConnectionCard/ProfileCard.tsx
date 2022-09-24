import { Menu } from "@mantine/core";
import { useSession } from "next-auth/react";
import { RiUserUnfollowFill } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";

import { get } from "src/modules/reputation/get";
import { destroy } from "src/modules/userConnections/destroy";
import { getConnectionByUsers } from "src/modules/userConnections/getConnectionByUsers";
import { getMyConnections } from "src/modules/userConnections/getMyConnections";

import Profile from "../Profile";

export default function ProfileCard({
  allowUnfollow,
  username,
  displayName,
  userHandle,
  userConnectionId,
}: Props) {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const { mutate: destroyConnection, isLoading: isLoadingDestroyConnection } =
    useMutation(
      async () => {
        await destroy({
          userConnectionId,
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

  return (
    <Profile
      username={username}
      displayName={displayName}
      userHandle={userHandle}
      menuActions={
        allowUnfollow ? (
          <Menu.Item
            color="red"
            icon={<RiUserUnfollowFill size={14} />}
            disabled={isLoadingDestroyConnection}
            onClick={() => destroyConnection()}
          >
            Un-follow
          </Menu.Item>
        ) : undefined
      }
    />
  );
}

type Props = {
  username: string;
  displayName: string;
  userHandle: string;
  allowUnfollow?: boolean;
  userConnectionId: number;
};
