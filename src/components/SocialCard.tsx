import React from "react";
import { Card, Text, Button, Group, Stack, Avatar, Grid } from "@mantine/core";

export function SocialCard() {
  const username = "Hello world";
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      // TODO: Maybe let's not do a gradient instead
      // sx={(theme) => ({
      //   backgroundImage: theme.fn.gradient({
      //     from: "#F72585",
      //     to: "#7209B7",
      //     deg: 45,
      //   }),
      // })}
    >
      <Group>
        <Avatar
          src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
          alt="Avatar image"
          radius="xl"
        />

        <Stack sx={() => ({ gap: "0.5rem" })}>
          <Text weight={500}>Username: {username}</Text>
          <Text>User handle: {username}#1</Text>
        </Stack>
      </Group>

      <Grid sx={() => ({ marginTop: "1rem" })}>
        <Grid.Col span={4}>
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            button
          </Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            button
          </Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            button
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
