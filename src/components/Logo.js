import { LOGO_URL } from "../utils/constants";

const Logo = () => {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer 
                 transition-all duration-200 
                 hover:-translate-y-0.5"
    >
      <img
        className="w-10 h-10 rounded-full shadow-sm 
                   transition-transform duration-200 
                   hover:scale-105"
        src={LOGO_URL}
        alt="logo"
      />

      <h1
        className="text-xl font-semibold text-white 
                   tracking-wide
                   transition-transform duration-200 
                   hover:scale-105"
      >
        YumZo!
      </h1>
    </div>
  );
};

export default Logo;
