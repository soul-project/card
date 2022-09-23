import React from "react";
import {
  Card,
  Text,
  Group,
  Stack,
  Avatar,
  Grid,
  Divider,
  Code,
} from "@mantine/core";

import FollowerBadge from "./SocialCard/FollowerBadge";
import ReputationBadge from "./SocialCard/ReputationBadge";
import QRBadge from "./SocialCard/QRBadge";
import Profile from "./Profile";

export function SocialCard() {
  const username = "hello-world";
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Profile username={username} displayName="Display Name" />

      <Divider my="sm" />

      <Text mt="1rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nisl
        finibus, interdum dolor in, imperdiet magna. Integer in purus nec augue
        ultricies sollicitudin sit amet a ligula. In eget sollicitudin justo.
        Orci varius natoque penatibus et turpis.
      </Text>

      <Grid mt="1rem">
        <Grid.Col span={4}>
          <FollowerBadge numFollowers={1000} />
        </Grid.Col>
        <Grid.Col span={4}>
          <ReputationBadge reputation={10} />
        </Grid.Col>
        <Grid.Col span={4}>
          <QRBadge />
        </Grid.Col>
      </Grid>
    </Card>
  );
}
