import { Reducer } from "redux";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { LeaderboardActions } from "./actions";

export interface IRootState {
  users: {
    username: string;
    score: number;
  }[];
}

const initialState: IRootState = {
  users: [],
};

const reducer: Reducer<IRootState> = reducerWithInitialState(initialState)
  .case(LeaderboardActions.addUser, (state, { username, score }) => {
    return {
      users: [...state.users, ...[{ username, score }]],
    };
  })
  .case(LeaderboardActions.initialUsers, (state) => {
    return {
      users: [...state.users],
    };
  })
  .build();

export default reducer;
