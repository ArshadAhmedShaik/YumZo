import { useState } from "react";

const LoginLogout = () => {
  const [state, setState] = useState("Login");

  const baseClasses =
    "px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm " +
    "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md";

  const loginClasses =
    "bg-red-400 text-white hover:bg-red-500";

  const logoutClasses =
    "bg-gray-200 text-gray-900 hover:bg-gray-300";

  return (
    <button
      className={`${baseClasses} ${
        state === "Login" ? loginClasses : logoutClasses
      }`}
      onClick={() =>
        setState(state === "Login" ? "Logout" : "Login")
      }
    >
      {state}
    </button>
  );
};

export default LoginLogout;
