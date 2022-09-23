import React from "react";
import { BsFillPeopleFill } from "react-icons/Bs";

import Badge from "./Badge";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export default function FollowerBadge({ numFollowers }: Props) {
  return (
    <Badge label={`${formatter.format(numFollowers)} followers`}>
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