import React from "react";
import { Card, Tabs } from "@mantine/core";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiHandshake } from "react-icons/si";

import ConnectionTypeTab from "./ConnectionCard/ConnectionTypeTab";

export default function ConnectionsCard() {
  const profiles = [
    { username: "another-username", displayName: "Another Display Name" },
    { username: "cool-username", displayName: "Cool Display Name" },
    { username: "awesome-username", displayName: "Awesome Display Name" },
  ];

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Tabs defaultValue="follower">
        <Tabs.List>
          <Tabs.Tab value="follower" icon={<BsFillPeopleFill />}>
            Followers
          </Tabs.Tab>
          <Tabs.Tab value="following" icon={<BsFillPeopleFill />}>
            Following
          </Tabs.Tab>
          <Tabs.Tab value="mutual" icon={<SiHandshake />}>
            Mutual
          </Tabs.Tab>
        </Tabs.List>

        <ConnectionTypeTab connectionType="follower" />

        <ConnectionTypeTab connectionType="following" />

        <ConnectionTypeTab connectionType="mutual" />
      </Tabs>
    </Card>
  );
}
