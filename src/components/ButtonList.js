import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cooking",
    "News",
    "Summer 2024",
    "BGMI",
    "React",
    "Web Development",
    "Movies",
    "Comedy",
    "Motivation",
    "Pop Music",
    "Bollywood",
  ];
  return (
    <div className="flex gap-2 p-3">
      {list.map((item, idx) => (
        <Button name={item} key={idx} />
      ))}
    </div>
  );
};

export default ButtonList;
