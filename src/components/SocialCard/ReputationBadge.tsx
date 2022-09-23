import React from "react";
import { FaMedal } from "react-icons/Fa";

import Badge from "./Badge";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export default function ReputationBadge({ reputation }: Props) {
  return (
    // <Badge>
    //   <>
    //     <FaMedal />
    //     {formatter.format(reputation)}
    //   </>
    // </Badge>

    <Badge label={`${formatter.format(reputation)} reputation points`}>
      <>
        <FaMedal />
        {formatter.format(reputation)}
      </>
    </Badge>
  );
}

type Props = {
  reputation: number;
};
