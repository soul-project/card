import { Stack } from "@mantine/core";
import type { NextPage } from "next";

import Head from "src/components/Head";
import Page from "src/components/Page";
import { SocialCard } from "src/components/SocialCard";
import ConnectionsCard from "src/components/ConnectionsCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <main>
        <Page>
          <Stack spacing="lg">
            <SocialCard />
            <ConnectionsCard />
          </Stack>
        </Page>
      </main>
    </div>
  );
};

export default Home;
