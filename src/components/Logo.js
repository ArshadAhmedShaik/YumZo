import { LOGO_URL } from "../utils/constants";

const Logo = () => {
  return (
    <div className="logo">
      <img id="logo" src={ LOGO_URL } alt="logo" />
      <h1>YumZo!</h1>
    </div>
  );
};

export default Logo;