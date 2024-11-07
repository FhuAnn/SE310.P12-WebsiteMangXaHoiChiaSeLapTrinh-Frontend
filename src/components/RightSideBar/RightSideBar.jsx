import React from "react";
import { Link } from "react-router-dom";
import "./RightSideBar.css";

const RightSideBar = () => {
  return (
    <>
      <div className="bg-orange-50 rounded shadow-sm">
        <h2 className="sidebar-item-tittle">Hello World!</h2>
        <div className="p-4">
          <p className="text-gray-600 text-sm">
            This is a collaboratively edited question and answer site for{" "}
            <strong>professional and enthusiast programmers</strong>. It's 100%
            free.
          </p>
          <div className="flex mt-4 space-x-4">
            <Link to="/About" className="text-blue-500">
              About
            </Link>
            <Link to="/Help" className="text-blue-500">
              Help
            </Link>
          </div>
        </div>
        <h2 className="sidebar-item-tittle">Hot Meta Posts</h2>
        <div className="p-4">
          <div className="flex items-start mb-2">
            <span className="font-bold mr-2">25</span>
            <a href="#" className="text-blue-600 hover:underline">
              If a Staging Ground post gets edited and posted, doesn't it need
              to indicate...
            </a>
          </div>
          <div className="flex items-start">
            <span className="font-bold mr-2">14</span>
            <a href="#" className="text-blue-600 hover:underline">
              What to do, when an obvious syntax error makes the whole
              staging-ground...
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-300 rounded mt-6">
        <div className="flex justify-between items-center p-4 bg-gray-100">
          <h2 className="font-bold">Watched Tags</h2>
          <a href="#" className="text-blue-600 hover:underline">
            edit
          </a>
        </div>
        <div className="flex flex-wrap gap-2 p-4">
          <span className="sidebar-item-watched-tag">c#</span>
          <span className="sidebar-item-watched-tag">css</span>
          <span className="sidebar-item-watched-tag">html</span>
          <span className="sidebar-item-watched-tag">javascript</span>
          <span className="sidebar-item-watched-tag">python</span>
          <span className="sidebar-item-watched-tag">reactjs</span>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
