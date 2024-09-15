import React from 'react';
import blackImage from '../images/dice/dice_1.png';
import { useState } from 'react';

const StartGame = () => {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(prev => !prev);
  };
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  console.log(selectedNumber);
  // debugger;



  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      {/* <!-- Score on Top Left --> */}
      <div className="absolute top-4 left-4 text-left">
        <h1 className="text-6xl font-bold">0</h1>
        <p className="text-xl">Total Score</p>
      </div>

      {/* <!-- Number Selection on Top Right --> */}
      <div className="absolute top-4 right-4 text-right">
        <h3 className="text-lg font-semibold mb-2">Select Number</h3>
        <div className="flex space-x-2">
          {
            arrNumber.map((value, i) => {
              <box
                key={i}
                className="w-10 h-10 border border-black text-xl font-bold hover:bg-black hover:text-white "
                onClick={() => setSelectedNumber(value)}
              >
                {value}
              </box>
            })

          }
        </div>
      </div>

      {/* <!-- Center Section for Dice and Buttons --> */}
      <div className="flex flex-col items-center space-y-6">
        {/* <!-- Dice Section --> */}
        <div className=" flex items-center justify-center">
          <img src={blackImage} alt="Dice" className="w-40 h-40" />
        </div>
        <button className="bg-black text-white py-2 px-6 rounded-md text-lg hover:bg-gray-800">
          Click on Dice to roll
        </button>

        {/* <!-- Controls Section --> */}
        <div className="flex flex-col space-y-4">
          <button className="border border-black py-2 px-6 text-lg font-medium hover:bg-gray-100">
            Reset Score
          </button>
          <button className="bg-black text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-gray-800"
            onClick={toggleRules}
          >
            Show Rules
          </button>
        </div>

        {showRules && (
          <div className="absolute bottom-4 left-4 right-4 p-4 bg-gray-200 border border-gray-400 rounded-md shadow-lg text-left">
            <h2 className="text-xl font-bold mb-2">How to Play Dice Game</h2>
            <ul className="list-disc pl-5">
              <li>Select any number</li>
              <li>Click on dice image</li>
              <li>After clicking on the dice, if the selected number is equal to the dice number, you will get the same points as the dice number</li>
              <li>If you get a wrong guess, 2 points will be deducted</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartGame;
