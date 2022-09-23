import React, { useState } from "react";
import { Box, Button, Group, Tooltip } from "@mantine/core";
import { BsFillPeopleFill } from "react-icons/Bs";
import { useClickOutside } from "@mantine/hooks";

export default function Badge({ children, label }: Props) {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  if (!label) {
    return (
      <Button sx={() => ({ width: "100%" })} ref={ref} variant="light">
        <Group sx={() => ({ gap: "8px" })}>{children}</Group>
      </Button>
    );
  }

  return (
    <Tooltip
      label={label}
      opened={opened}
      onClick={() => setOpened(true)}
      withArrow
    >
      <Button sx={() => ({ width: "100%" })} ref={ref} variant="light">
        <Group sx={() => ({ gap: "8px" })}>{children}</Group>
      </Button>
    </Tooltip>
  );
}

type Props = React.PropsWithChildren<{ label?: string }>;
