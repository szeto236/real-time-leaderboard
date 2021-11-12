import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { InputForm } from "./components/InputForm";
import { UsersList } from "./components/UsersList";
import { LeaderboardActions } from "./store/actions";

let socket: Socket;
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: { users: [] }) => state.users);

  useEffect(() => {
    socket = io("http://localhost:3001");
    dispatch({
      type: LeaderboardActions.loadInitialSocketData.started.type,
      payload: { socket },
    });

    socket.on("userAdded", (res: { username: string; score: number }) => {
      dispatch({ type: LeaderboardActions.addUser, payload: res });
    });
  }, [dispatch]);

  return (
    <div className="App container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">LEADERBOARD</h1>

      <InputForm socket={socket} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
