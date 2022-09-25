import { useState } from "react";
import type { AppProps } from "next/app";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useLocalStorage } from "@mantine/hooks";

import { RouterTransition } from "src/components/RouterTrasition";

function MyApp({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
}: AppProps<{ session: Session; dehydratedState: unknown }>) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme-soul-card",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider
      session={session}
      refetchInterval={1800}
      refetchOnWindowFocus={false}
    >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{ colorScheme }}
            >
              <RouterTransition />
              <Component {...pageProps} />
            </MantineProvider>
          </ColorSchemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
