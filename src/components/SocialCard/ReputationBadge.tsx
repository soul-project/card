import React from "react";
import { FaMedal } from "react-icons/fa";

import Badge from "./Badge";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export default function ReputationBadge({ reputation }: Props) {
  return (
    <Badge
      tooltipLabel={`${
        reputation ? formatter.format(reputation) : "--"
      } reputation points`}
    >
      <>
        <FaMedal />
        {reputation ? formatter.format(reputation) : "--"}
      </>
    </Badge>
  );
}

type Props = {
  reputation?: number;
};
