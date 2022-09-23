import { Group, Avatar, Stack, Code, Text } from "@mantine/core";

export default function Profile({ username, displayName }: Props) {
  return (
    <Group>
      <Avatar
        src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
        alt="Avatar image"
        radius="xl"
      />

      <Stack sx={() => ({ gap: "0.1rem" })}>
        <Text weight={500}>{displayName}</Text>
        <Text>Username: {username}</Text>
        <Text>
          User handle: <Code color="blue">{username}#1</Code>
        </Text>
      </Stack>
    </Group>
  );
}

type Props = {
  username: string;
  displayName: string;
};
