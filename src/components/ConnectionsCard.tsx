import React from "react";
import { Card, Divider, Stack, Tabs } from "@mantine/core";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiHandshake } from "react-icons/si";

import Profile from "./Profile";

export default function ConnectionsCard() {
  const profiles = [
    { username: "another-username", displayName: "Another Display Name" },
    { username: "cool-username", displayName: "Cool Display Name" },
    { username: "awesome-username", displayName: "Awesome Display Name" },
  ];
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Tabs defaultValue="followers">
        <Tabs.List>
          <Tabs.Tab value="followers" icon={<BsFillPeopleFill />}>
            Followers
          </Tabs.Tab>
          <Tabs.Tab value="following" icon={<BsFillPeopleFill />}>
            Following
          </Tabs.Tab>
          <Tabs.Tab value="mutual" icon={<SiHandshake />}>
            Mutual
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="followers" pt="xs">
          <Stack>
            {profiles.map(({ username, displayName }, index) => (
              <React.Fragment key={username}>
                <Profile username={username} displayName={displayName} />
                {index < profiles.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="following" pt="xs">
          <Stack>
            {profiles.reverse().map(({ username, displayName }, index) => (
              <React.Fragment key={username}>
                <Profile username={username} displayName={displayName} />
                {index < profiles.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="mutual" pt="xs">
          <Stack>
            {profiles.reverse().map(({ username, displayName }, index) => (
              <React.Fragment key={username}>
                <Profile username={username} displayName={displayName} />
                {index < profiles.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
}
