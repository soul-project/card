import React, { useState } from "react";
import { Button, Group, Tooltip } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";

export default function Badge({ children, tooltipLabel, onBadgeClick }: Props) {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  if (!tooltipLabel) {
    return (
      <Button
        sx={() => ({ width: "100%" })}
        ref={ref}
        variant="light"
        onClick={onBadgeClick}
      >
        <Group sx={() => ({ gap: "8px" })}>{children}</Group>
      </Button>
    );
  }

  return (
    <Tooltip
      label={tooltipLabel}
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

type Props = React.PropsWithChildren<{
  tooltipLabel?: string;
  onBadgeClick?: () => void;
}>;
