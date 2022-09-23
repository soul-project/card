import { Group, Avatar, Stack, Code, Text } from "@mantine/core";

export default function Profile({ username, displayName }: Props) {
  return (
    <Group sx={() => ({ flexWrap: "nowrap" })}>
      <Avatar
        src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
        alt="Avatar image"
        radius="xl"
        sx={() => ({ flexShrink: 0 })}
      />

      <Stack sx={() => ({ gap: "0.1rem", flexShrink: 1, minWidth: 0 })}>
        <Text
          weight={500}
          sx={() => ({
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          })}
        >
          {displayName}
        </Text>
        <Text
          sx={() => ({
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          })}
        >
          Username: {username}
        </Text>
        <Text
          sx={() => ({
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          })}
        >
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
