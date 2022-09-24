import { useEffect } from "react";
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useSession, signOut } from "next-auth/react";

export default function Page({ children }: Props) {
  const largeScreen = useMediaQuery("(min-width: 500px)");

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signOut();
    }
  }, [session]);

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
