import React from "react";
import { Card, Tabs } from "@mantine/core";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiHandshake } from "react-icons/si";

import ConnectionTypeTab from "./ConnectionCard/ConnectionTypeTab";

export default function ConnectionsCard() {
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

        <ConnectionTypeTab connectionType="following" allowUnfollow />

        <ConnectionTypeTab connectionType="mutual" allowUnfollow />
      </Tabs>
    </Card>
  );
}
