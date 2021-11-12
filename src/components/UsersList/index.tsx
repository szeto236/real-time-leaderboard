import { FC } from "react";

interface IUsersList {
  users: {
    username: string;
    score: number;
  }[];
}

export const UsersList: FC<IUsersList> = ({ users }) => {
  const sortedUsers = users.sort((a, b) => b.score - a.score);
  const topTenUsers = sortedUsers.slice(0, 10);

  return (
    <>
      <div className="grid grid-cols-5 text-xl border-b p-2">
        <div>Rank</div>
        <div className="col-span-2">Name</div>
        <div className="col-span-2">Score</div>
      </div>

      {topTenUsers.map((player: { username: string; score: number }, i) => {
        return (
          <div
            className="grid grid-cols-5 text-2xl border-b p-2"
            key={player.username}
          >
            <div>#{i + 1}</div>
            <div className="col-span-2">{player.username}</div>
            <div className="col-span-2">{player.score}</div>
          </div>
        );
      })}
    </>
  );
};
