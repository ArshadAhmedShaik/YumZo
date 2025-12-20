import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="app min-h-screen flex flex-col">
      

      <div
        id="contactContent"
        className="body flex-1 p-6 bg-gray-50 flex flex-col justify-center items-center text-center space-y-4"
      >
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-700 max-w-md">
          If you have any questions, suggestions, or just want to say hi, feel free to reach out! 😊
        </p>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-sky-500 hover:underline"
          >
            shaik.arshad.dev@gmail.com
          </a>
        </p>
        <p className="text-gray-700">
          Phone:{" "}
          <a href="tel:+911234567890" className="text-sky-500 hover:underline">
            +91 12345 67890
          </a>
        </p>
      </div>

      
    </div>
  );
};

export default Contact;
