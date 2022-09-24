import React from "react";
import { IoQrCode } from "react-icons/io5";

import Badge from "./Badge";

export default function QRBadge() {
  return (
    // TODO: Maybe open a modal to show my QR code and think of how we can scan as well
    <Badge onBadgeClick={() => {}}>
      <IoQrCode />
    </Badge>
  );
}
