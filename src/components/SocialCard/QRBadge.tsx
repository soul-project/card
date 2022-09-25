import { Center, Modal } from "@mantine/core";
import React, { useState } from "react";
import { IoQrCode } from "react-icons/io5";
import QRCode from "react-qr-code";

import Badge from "./Badge";

export default function QRBadge({
  userId,
  handle,
  username,
  displayName,
}: Props) {
  const [opened, setOpened] = useState(false);

  const getFollowUrl = () => {
    const url = new URL(
      (process.env.NEXT_PUBLIC_ANALYTICS_BASE_URL ??
        "https://soul-card.vercel.app") + "/follow-by-qr"
    );
    url.searchParams.set("user_id", String(userId));
    url.searchParams.set("handle", handle);
    url.searchParams.set("username", username);
    url.searchParams.set("name", displayName || username);
    return url.toString();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Invite a friend to follow!"
      >
        <Center>
          <QRCode value={getFollowUrl()} />
        </Center>
      </Modal>

      <Badge onBadgeClick={() => setOpened(true)}>
        <IoQrCode />
      </Badge>
    </>
  );
}

type Props = {
  userId: number;
  handle: string;
  username: string;
  displayName: string | null;
};
