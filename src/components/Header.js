import { useContext } from "react";

import Logo from "./Logo";
import NavItems from "./NavItems";
import LoginLogout from "./LoginLogout";
import UserContext from "../utils/UserContext";
import User2Context from "../utils/User2Context";

const Header = () => {

  const data = useContext(UserContext);
  const data2 = useContext(User2Context);

  return (
    <header className="h-16 px-6 flex items-center justify-between bg-gray-900 shadow-md">
      <Logo />
      <NavItems />
      <LoginLogout />
      <div className="text-white">
        {data.loggedInUser}
      </div>
      <div className="text-white">
        {data2.username}
      </div>
    </header>
  );


};

export default Header;
