import axios from "axios";
import { Session } from "next-auth";

export const NUM_ITEMS_PER_PAGE = 100;

export const getMyConnections = async ({
  session,
  page = 1,
  numItemsPerPage = NUM_ITEMS_PER_PAGE,
  connectionType,
}: getMyConnectionsArgs) => {
  const { data: userConnectionsData } =
    await axios.get<UserConnectionsListData>(
      "https://api.soul-network.com/v1/user-connections/my-connections",
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
        params: {
          page,
          num_items_per_page: numItemsPerPage,
          connection_type: connectionType,
        },
      }
    );
  return {
    userConnections: userConnectionsData.user_connections.map(
      (userConnection) => ({
        id: userConnection.id,
        ...(connectionType === "following" || connectionType === "mutual"
          ? {
              username: userConnection.to_user.username,
              userHandle: userConnection.to_user.user_handle,
              userId: userConnection.to_user.id,
              displayName: userConnection.to_user.display_name,
            }
          : {
              username: userConnection.from_user.username,
              userHandle: userConnection.from_user.user_handle,
              userId: userConnection.from_user.id,
              displayName: userConnection.from_user.display_name,
            }),
      })
    ),
    totalCount: userConnectionsData.total_count,
  };
};

getMyConnections.key = "modules/users/getMyConnections";

type UserConnectionsData = {
  id: number;
  to_user: {
    id: number;
    username: string;
    user_handle: string;
    display_name: string | null;
  };
  from_user: {
    id: number;
    username: string;
    user_handle: string;
    display_name: string | null;
  };
};

type UserConnectionsListData = {
  user_connections: UserConnectionsData[];
  total_count: number;
};

export type ConnectionType = "following" | "follower" | "mutual";

type getMyConnectionsArgs = {
  page?: number;
  numItemsPerPage?: number;
  session: Session;
  connectionType: ConnectionType;
};
