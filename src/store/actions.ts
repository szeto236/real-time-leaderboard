import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory(`@@leaderboard`);

export const ACTION_TYPES = {
  ADD_USER: "ADD_USER",
  ADD_USER_SOCKET: "ADD_USER_SOCKET",
  INITIAL_USERS: "INIATIAL_USERS",
  LOAD_INITIAL_SOCKET_DATA: "LOAD_INITIAL_SOCKET_DATA",
};

const addUser = actionCreator<{
  username: string;
  score: number;
}>(ACTION_TYPES.ADD_USER);

const addUserSocket = actionCreator.async<
  {
    username: string;
    score: number;
  },
  {},
  {}
>(ACTION_TYPES.ADD_USER);

const initialUsers = actionCreator(ACTION_TYPES.INITIAL_USERS);

const loadInitialSocketData = actionCreator.async(
  ACTION_TYPES.LOAD_INITIAL_SOCKET_DATA
);

export const LeaderboardActions = {
  addUser,
  addUserSocket,
  initialUsers,
  loadInitialSocketData,
};
