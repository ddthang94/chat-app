import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  }

  return (
    <div className="relative bg-[url(https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="flex flex-col items-center bg-white px-20 py-10 rounded-md shadow-md">
        <div className="flex items-center gap-1 text-blue-400 font-bold p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
          </svg>
          ChatApp
        </div>
        <div className="mb-5 uppercase font-bold border-b">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </div>
        <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            className="block w-full rounded-md p-2 mb-2 border"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            className="block w-full rounded-md p-2 mb-2 border"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <button className="bg-blue-500 text-white block w-full rounded-md p-2">
            {isLoginOrRegister === "register" ? "Register" : "Login"}
          </button>
          <div className="text-center mt-2">
            {isLoginOrRegister === "register" && (
              <div>
                Already have account?&nbsp;
                <button onClick={() => setIsLoginOrRegister("login")}>
                  Login
                </button>
              </div>
            )}
            {isLoginOrRegister === "login" && (
              <div>
                Don't have an account?&nbsp;
                <button onClick={() => setIsLoginOrRegister("register")}>
                  Register
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="absolute bottom-2 text-sm px-2 border font-medium shadow-md">
        ChatApp&copy;2023 - All rights reserved.
      </div>
    </div>
  );
}
