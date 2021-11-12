import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Socket } from "socket.io-client";
import { LeaderboardActions } from "../../store/actions";

interface IInputForm {
  socket: Socket;
}

export const InputForm: FC<IInputForm> = ({ socket }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    score: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatchForm = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: LeaderboardActions.addUserSocket.started.type,
      payload: { ...formValues, socket },
    });
    setFormValues({ username: "", score: "" });
  };

  return (
    <form onSubmit={dispatchForm}>
      <div className="grid grid-cols-4 gap-2 p-2">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full rounded py-2 px-4 focus:outline-none"
            onChange={handleInputChange}
            value={formValues["username"]}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="score"
            placeholder="Enter score"
            className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full rounded py-2 px-4 focus:outline-none"
            onChange={handleInputChange}
            value={formValues["score"]}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md focus:outline-none"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
