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
  const { data: session, status } = useSession();
  const { data: reputationData } = useQuery(
    [get.key, session?.user.id],
    () => get({ userId: session!.user.id }),
    { enabled: !!session }
  );
  const { data: followersData } = useQuery(
    [getMyConnections.key, session?.user.id],
    () =>
      getMyConnections({
        numItemsPerPage: 1,
        connectionType: "follower",
        session: session!,
      }),
    { enabled: !!session }
  );

  if (status === "loading") {
    return (
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Center>
          <Loader color="green" />
        </Center>
      </Card>
    );
  }

  if (!session) {
    return (
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Center>
          <Button variant="light" color="green" onClick={() => signIn("soul")}>
            Login to start using!
          </Button>
        </Center>
      </Card>
    );
  }

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Profile
        username={session.user.username}
        displayName={session.user.displayName || session.user.username}
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

      <Divider my="sm" />

      {session.user.bio && <Text mt="1rem">{session.user.bio}</Text>}

      <Grid mt="1rem">
        <Grid.Col span={4}>
          <FollowerBadge numFollowers={followersData?.totalCount} />
        </Grid.Col>
        <Grid.Col span={4}>
          <ReputationBadge reputation={reputationData?.reputation} />
        </Grid.Col>
        <Grid.Col span={4}>
          <QRBadge />
        </Grid.Col>
      </Grid>
    </Card>
  );
}
