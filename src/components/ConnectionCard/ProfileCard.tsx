import { Menu } from "@mantine/core";
import { RiUserUnfollowFill } from "react-icons/ri";

import Profile from "../Profile";

export default function ProfileCard({
  allowUnfollow,
  username,
  displayName,
  userHandle,
}: Props) {
  return (
    <Profile
      username={username}
      displayName={displayName}
      userHandle={userHandle}
      menuActions={
        allowUnfollow ? (
          <Menu.Item color="red" icon={<RiUserUnfollowFill size={14} />}>
            Un-follow
          </Menu.Item>
        ) : undefined
      }
    />
  );
}

type Props = {
  username: string;
  displayName: string;
  userHandle: string;
  allowUnfollow?: boolean;
};
