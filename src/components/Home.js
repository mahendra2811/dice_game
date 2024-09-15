import React from 'react';
import dicess from '../images/dices.png';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    // <h1>Welcome to the Home Page</h1>;
    <div className="flex items-center justify-center h-[93vh] bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left section: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={dicess}
            alt="Dice"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right section: Title and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">DICE GAME</h1>

          <Link
            to="/start-game"
            className="inline-block px-8 py-4 text-white bg-black font-semibold text-lg rounded-lg hover:bg-gray-800 transition"
            aria-current="page"
          >
            Play Now
          </Link>

        </div>
      </div>
    </div>

  );
};

export default Home;
