import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-orange-500">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-9xl font-black animate-bounce">🦄</h1>
        <h2 className="text-5xl font-bold text-white">Purple Bananas Dancing!</h2>
        <p className="text-3xl text-yellow-300 animate-pulse">The Square Root of a Potato is Wednesday</p>
        <p className="text-xl text-white">Flying Spaghetti Monsters ate all the pixels here</p>
        <div className="flex gap-4 justify-center items-center">
          <span className="text-6xl animate-spin">🍕</span>
          <span className="text-6xl animate-bounce">🎸</span>
          <span className="text-6xl animate-pulse">🚀</span>
        </div>
        <Link to="/" className="inline-block mt-8 px-8 py-4 bg-green-500 text-white text-2xl font-bold rounded-full hover:bg-green-600 transform hover:scale-110 transition-all">
          Escape the Madness
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
