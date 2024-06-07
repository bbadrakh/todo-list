import React from "react";
import Card from "./utils/card";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-20 ">
      <p className="text-3xl font-semibold "> My To-do List</p>
      <div className="flex flex-row items-center gap-4">
        <input
          className="border-solid border-2 min-w-72 text-lg rounded p-1 h-10 input-primary input"
          placeholder="Whachu planning today? :)"
        />
        <button className="btn btn-primary h-6 text-white">Add</button>
      </div>
      <div className="max-h-fit ">
        <Card />
      </div>
    </div>
  );
};

export default Home;
