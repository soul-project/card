import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  MantineProvider,
} from "@mantine/core";

export function SocialCard() {
  return (
    <MantineProvider inherit theme={{ colorScheme: "dark" }}>
      <Card
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
        // TODO: Maybe let's not do a gradient instead
        sx={(theme) => ({
          backgroundImage: theme.fn.gradient({
            from: "#F72585",
            to: "#7209B7",
            deg: 45,
          }),
        })}
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </MantineProvider>
  );
}
