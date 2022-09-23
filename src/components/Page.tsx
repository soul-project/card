import { Box, Center } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Page({ children }: Props) {
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

type Props = React.PropsWithChildren;
