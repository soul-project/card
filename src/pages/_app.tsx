import { useEffect } from "react";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Session } from "next-auth";
import { SessionProvider, signOut } from "next-auth/react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider
      session={session}
      refetchInterval={1800}
      refetchOnWindowFocus={false}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "light" }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
}

export default MyApp;
