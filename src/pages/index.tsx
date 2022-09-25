import { Stack } from "@mantine/core";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import Head from "src/components/Head";
import Page from "src/components/Page";
import MyCard from "src/components/MyCard";
import ConnectionsCard from "src/components/ConnectionsCard";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Head subTitle={session?.user.username} />
      <main>
        <Page>
          <Stack spacing="lg">
            <MyCard />
            <ConnectionsCard />
          </Stack>
        </Page>
      </main>
    </div>
  );
};

export default Home;
