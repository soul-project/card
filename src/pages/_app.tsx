import { useState } from "react";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function MyApp({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
}: AppProps<{ session: Session; dehydratedState: unknown }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider
      session={session}
      refetchInterval={1800}
      refetchOnWindowFocus={false}
    >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ colorScheme: "light" }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
