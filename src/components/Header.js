import Logo from "./Logo.js";
import NavItems from "./NavItems.js";
import LoginLogout from "./LoginLogout.js";

const Header = () => {

  return (
    <div className="header">
      <Logo />
      <NavItems />
      <LoginLogout />
    </div>
  );
};

export default Header;

