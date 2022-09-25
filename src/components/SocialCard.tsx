import React from "react";
import {
  Card,
  Text,
  Grid,
  Divider,
  Menu,
  Button,
  Center,
  Loader,
} from "@mantine/core";
import { FaSignOutAlt } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { useQuery } from "react-query";

import { get } from "src/modules/reputation/get";
import { getMyConnections } from "src/modules/userConnections/getMyConnections";

import FollowerBadge from "./SocialCard/FollowerBadge";
import ReputationBadge from "./SocialCard/ReputationBadge";
import QRBadge from "./SocialCard/QRBadge";
import Profile from "./Profile";

export function SocialCard() {
  const { data: session } = useSession();
  const { data: reputationData } = useQuery(
    [get.key, session?.user.id],
    () => get({ userId: session!.user.id }),
    { enabled: !!session }
  );

  const getMyConnectionArgs: Parameters<typeof getMyConnections>[0] = {
    numItemsPerPage: 1,
    connectionType: "follower",
    session: session!,
  };
  const { data: followersData } = useQuery(
    [getMyConnections.key, getMyConnectionArgs],
    () => getMyConnections(getMyConnectionArgs),
    { enabled: !!session }
  );

  if (!session) throw new Error("Used not signed in");

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Profile
        username={session.user.username}
        displayName={session.user.displayName || session.user.username}
        userHandle={session.user.userHandle}
        menuActions={
          <Menu.Item
            color="red"
            icon={<FaSignOutAlt size={14} />}
            onClick={() => signOut()}
          >
            Logout
          </Menu.Item>
        }
      />

      {session.user.bio && (
        <>
          <Divider my="sm" />
          <Text mt="1rem">{session.user.bio}</Text>
        </>
      )}

      <Grid mt="1rem">
        <Grid.Col span={4}>
          <FollowerBadge numFollowers={followersData?.totalCount} />
        </Grid.Col>
        <Grid.Col span={4}>
          <ReputationBadge reputation={reputationData?.reputation} />
        </Grid.Col>
        <Grid.Col span={4}>
          <QRBadge
            userId={session.user.id}
            handle={session.user.userHandle}
            username={session.user.username}
            displayName={session.user.displayName}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}
