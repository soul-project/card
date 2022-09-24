import {
  Tabs,
  Stack,
  Divider,
  Card,
  Center,
  Loader,
  Button,
} from "@mantine/core";
import { useSession } from "next-auth/react";
import React from "react";
import { useInfiniteQuery } from "react-query";

import {
  ConnectionType,
  getMyConnections,
  NUM_ITEMS_PER_PAGE,
} from "src/modules/userConnections/getMyConnections";

import ProfileCard from "./ProfileCard";

export default function ConnectionTypeTab({
  allowUnfollow,
  connectionType,
}: Props) {
  const { data: session } = useSession();
  const { data, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      [getMyConnections.key, { session, connectionType }],
      ({ pageParam = 1 }) =>
        getMyConnections({
          page: pageParam,
          session: session!,
          connectionType,
        }),
      {
        getNextPageParam: ({ totalCount }, pages) => {
          const userConnections = pages.flatMap((page) => page.userConnections);
          if (userConnections.length >= totalCount) {
            return undefined;
          }
          return Math.ceil(userConnections.length / NUM_ITEMS_PER_PAGE) + 1;
        },
        refetchOnWindowFocus: false,
        enabled: !!session,
      }
    );

  if (!data || isFetching) {
    return (
      <Tabs.Panel value={connectionType} pt="xs">
        <Center>
          <Loader color="blue" />
        </Center>
      </Tabs.Panel>
    );
  }

  return (
    <Tabs.Panel value={connectionType} pt="xs">
      <Stack>
        {data.pages
          .flatMap((page) => page.userConnections)
          .map(({ username, displayName, userHandle }, index) => (
            <React.Fragment key={username}>
              <ProfileCard
                username={username}
                displayName={displayName || username}
                userHandle={userHandle}
                allowUnfollow={allowUnfollow}
              />
              {index <
                data.pages.flatMap((page) => page.userConnections).length -
                  1 && <Divider />}
            </React.Fragment>
          ))}
        {hasNextPage && (
          <Center mt="1rem">
            <Button
              loading={isFetchingNextPage || isFetching}
              onClick={() => fetchNextPage()}
              variant="subtle"
            >
              Load next page
            </Button>
          </Center>
        )}
      </Stack>
    </Tabs.Panel>
  );
}

type Props = {
  connectionType: ConnectionType;
  allowUnfollow?: boolean;
};
