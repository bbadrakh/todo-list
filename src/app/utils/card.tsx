"use client";
import Image from "next/image";
import trashCan from "../image/trash.svg";
import check from "../image/check.svg";
import { useState } from "react";

const Card = () => {
  const [color, setColor] = useState<boolean>(true);
  const handleToggle = () => {
    setColor(!color);
    console.log(color);
  };
  return (
    <div className="flex flex-row items-center w-fit h-fit border-2 border-solid rounded pt-3 pb-3 pl-6 pr-6 bg-primary text-primary-content shadow-xl text-wrap">
      <p className="text-white text-xl self-start">1. </p>
      <div>
        <p
          className={` ml-6 h-fit break-words whitespace-normal max-w-60 text-lg cursor-pointer ${color || " text-gray-400 line-through"} ${
            color && "text-white"
          }`}
          onClick={handleToggle}
        >
          sudgdsggbsdgdsgsdgsdsgjhsdlgdhsglkdshgsdlkghslgkshdglkdshgklsdhgsdklhdsfghbdsj
        </p>
        <p className="mt-1">Date: 2024/06/07</p>
      </div>
      <Image className="ml-6 cursor-pointer" src={trashCan} width={0} height={0} style={{ width: 25, height: 25 }} alt="trash can png" />
      <Image className="ml-6 cursor-pointer" src={check} width={0} height={0} style={{ width: 30, height: 30 }} alt="check png" />
    </div>
  );
};

export default Card;
