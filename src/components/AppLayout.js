import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;