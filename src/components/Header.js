import Logo from "./Logo";
import NavItems from "./NavItems";
import LoginLogout from "./LoginLogout";

const Header = () => {
  return (
    <header className="h-16 px-6 flex items-center justify-between bg-gray-900 shadow-md">
      <Logo />
      <NavItems />
      <LoginLogout />
    </header>
  );
};

export default Header;
