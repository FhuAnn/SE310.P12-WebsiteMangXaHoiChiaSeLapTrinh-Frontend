import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import HomeMainBar from "../../components/HomeMainBar/HomeMainBar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div className="container mx-auto flex mt-4">
      <aside className="w-1/4 h-screen bg-white p-4 shadow-sm sidebar">
        <LeftSideBar></LeftSideBar>
      </aside>
      <main className="w-2/4 bg-white p-4 shadow-sm ml-4">
        <HomeMainBar></HomeMainBar>
      </main>
      <aside className="w-1/4 bg-white p-4 shadow-sm ml-4">
        <RightSideBar></RightSideBar>
      </aside>
    </div>
  );
};

export default Home;
