import type { NextPage } from "next";

import Head from "src/components/Head";
import Page from "src/components/Page";
import { SocialCard } from "src/components/SocialCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <main>
        <Page>
          <SocialCard />
        </Page>
      </main>
    </div>
  );
};

export default Home;
