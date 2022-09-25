import { useEffect } from "react";
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Page({ children }: Props) {
  const largeScreen = useMediaQuery("(min-width: 500px)");

  const { data: session } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    const singOutAndRedirect = async () => {
      await signOut();
      push("/");
    };

    if (session?.error === "RefreshAccessTokenError") {
      singOutAndRedirect();
    }
  }, [push, session]);

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

type Props = React.PropsWithChildren;
