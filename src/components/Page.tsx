import { Box } from "@mantine/core";

export default function Page({ children }: Props) {
  return (
    <Box
      sx={() => ({
        margin: "20px",
      })}
    >
      {children}
    </Box>
  );
}

type Props = React.PropsWithChildren;
