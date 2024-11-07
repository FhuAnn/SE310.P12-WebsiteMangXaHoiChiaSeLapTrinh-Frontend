import React from "react";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  return (
    <>
      <div className="bg-yellow-100 p-4 rounded shadow-sm">
        <h2 className="text-gray-700 font-semibold">Hello World!</h2>
        <p className="text-gray-600 text-sm mt-2">
          This is a collaboratively edited question and answer site for{" "}
          <strong>professional and enthusiast programmers</strong>. It's 100%
          free.
        </p>

        <div className="flex space-x-4 mt-4">
          <Link to="/About" className="text-blue-500">
            About
          </Link>
          <Link to="/Help" className="text-blue-500">
            Help
          </Link>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
