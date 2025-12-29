import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div 
            id="error" 
            className="flex flex-col items-center justify-center h-screen bg-red-50 text-red-900"
        >
            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong 😢</h1>
            <h3 className="text-xl">
                {err?.status}: {err?.statusText || "Unknown Error"}
            </h3>
            <p className="mt-2 text-sm text-red-700">
                Please try refreshing the page or contact support.
            </p>
        </div>
    );
}

export default Error;
