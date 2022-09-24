import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";

import Badge from "./Badge";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export default function FollowerBadge({ numFollowers }: Props) {
  return (
    <Badge tooltipLabel={`${formatter.format(numFollowers)} followers`}>
      <>
        <BsFillPeopleFill />
        {formatter.format(numFollowers)}
      </>
    </Badge>
  );
}

type Props = {
  numFollowers: number;
};
