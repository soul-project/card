import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Button, Card, Center, Loader, Stack } from "@mantine/core";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

import Page from "src/components/Page";
import Head from "src/components/Head";
import FollowProfile from "src/components/FollowByQR/FollowProfile";

const FollowByQR: NextPage = () => {
  const router = useRouter();
  const { user_id, name, username, handle } = router.query;
  const userId = user_id ? parseInt(user_id as string) : undefined;

  const allConditionsMet =
    typeof name === "string" &&
    typeof handle === "string" &&
    typeof username === "string" &&
    Number.isInteger(userId);

  return (
    <div>
      <Head subTitle={`Follow ${username}`} />
      <main>
        <Page>
          <Stack>
            <Link href="/" passHref>
              <Button
                variant="default"
                leftIcon={<FiChevronLeft />}
                component="a"
                sx={() => ({ width: "fit-content" })}
              >
                Back
              </Button>
            </Link>
            <Card shadow="sm" p="lg" radius="md" withBorder mt="2rem">
              {allConditionsMet ? (
                <FollowProfile
                  userId={userId!}
                  username={username}
                  handle={handle}
                  name={name}
                />
              ) : (
                <Center>
                  <Loader />
                </Center>
              )}
            </Card>
          </Stack>
        </Page>
      </main>
    </div>
  );
};

export default FollowByQR;
