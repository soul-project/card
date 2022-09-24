import {
  Group,
  Avatar,
  Stack,
  Code,
  Text,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";

export default function Profile({
  username,
  displayName,
  menuActions,
  userHandle,
}: Props) {
  return (
    <Group sx={() => ({ flexWrap: "nowrap" })}>
      <Avatar
        src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
        alt="Avatar image"
        radius="xl"
        sx={() => ({ flexShrink: 0 })}
      />

      <Stack
        sx={() => ({
          gap: "0.1rem",
          flexShrink: 1,
          minWidth: 0,
          width: "100%",
        })}
      >
        <Group
          position="apart"
          sx={() => ({ width: "100%", flexWrap: "nowrap" })}
        >
          <Text
            weight={500}
            sx={() => ({
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flexShrink: 1,
            })}
          >
            {displayName}
          </Text>

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon
                sx={() => ({ visibility: menuActions ? "visible" : "hidden" })}
              >
                <BsThreeDots size={18} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>{menuActions}</Menu.Dropdown>
          </Menu>
        </Group>
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
          User handle: <Code color="blue">{userHandle}</Code>
        </Text>
      </Stack>
    </Group>
  );
}

type Props = {
  username: string;
  displayName: string;
  menuActions?: React.ReactElement;
  userHandle: string;
};
