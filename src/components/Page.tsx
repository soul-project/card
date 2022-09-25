import { useEffect } from "react";
import { Box, Button, Card, Center, Loader } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useSession, signOut, signIn } from "next-auth/react";

function PageWrapper({ children }: React.PropsWithChildren) {
  const largeScreen = useMediaQuery("(min-width: 500px)");
  return (
    <Box
      sx={() => ({
        margin: largeScreen ? "auto" : "20px",
        marginTop: "20px",
        maxWidth: "500px",
      })}
    >
      {children}
    </Box>
  );
}

export default function Page({ children }: Props) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signOut();
    }
  }, [session?.error]);

  if (status === "loading") {
    return (
      <PageWrapper>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Center>
            <Loader color="green" />
          </Center>
        </Card>
      </PageWrapper>
    );
  }

  if (!session) {
    return (
      <PageWrapper>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Center>
            <Button
              variant="light"
              color="green"
              onClick={() => signIn("soul")}
            >
              Login to start using!
            </Button>
          </Center>
        </Card>
      </PageWrapper>
    );
  }

  return <PageWrapper>{children}</PageWrapper>;
}

type Props = React.PropsWithChildren;
