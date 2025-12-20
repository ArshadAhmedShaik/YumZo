const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-sm font-semibold text-white mb-2">
              Contact
            </h2>
            <p className="text-sm hover:text-white transition-colors">
              shaik.arshad.dev@gmail.com
            </p>
            <p className="text-sm hover:text-white transition-colors">
              Phone: +91 xxxxxxxxx
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-sm">
              Made with <span className="text-red-500">❤️</span> by{" "}
              <span className="font-medium text-white">Arshad</span>
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <h2 className="text-sm font-semibold text-white mb-2">
              Address
            </h2>
            <p className="text-sm hover:text-white transition-colors">
              Hyd, Telangana
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
