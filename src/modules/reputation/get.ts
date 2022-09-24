import axios from "axios";
import { StatusCodes } from "http-status-codes";

export const get = async ({ userId }: getArgs) => {
  try {
    const { data } = await axios.get<UserReputationData>(
      `https://api.soul-network.com/v1/reputation/${userId}`
    );
    return {
      reputation: data.reputation,
    };
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response?.status === StatusCodes.NOT_FOUND
    ) {
      return null;
    }
    throw error;
  }
};

get.key = "modules/reputation/get";

type UserReputationData = {
  reputation: number;
};

type getArgs = {
  userId: number;
};
