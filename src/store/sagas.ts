import { all, takeEvery, put } from "redux-saga/effects";
import { LeaderboardActions } from "./actions";

function* loadSocketData() {
  yield put(LeaderboardActions.initialUsers());
}

function addUserToSocket(action: any) {
  action.payload.socket.emit("addUser", {
    username: action.payload.username,
    score: action.payload.score,
  });
}

function* rootSaga() {
  yield all([
    takeEvery(LeaderboardActions.loadInitialSocketData.started, loadSocketData),
    takeEvery(LeaderboardActions.addUserSocket.started, addUserToSocket),
  ]);
}

export default rootSaga;
