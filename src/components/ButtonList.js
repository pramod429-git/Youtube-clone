import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const listOfButtons = [
    "All",
    "Music",
    "KTM",
    "Motovlogs",
    "Live",
    "Shark Tank",
    "Mixes",
    "Podcasts",
    "Dramedy",
    "Auditons",
    "Computer programming",
    "Bowling",
    // "Feature Phones",
    // "Android",
    // "Recently updated",
    // "Watched",
    // "New to you",
  ];
  return (
    <div className="flex overflow-x-auto whitespace-nowrap space-x-3 p-2 scrollbar-hide">
      {listOfButtons.map((button) => (
        <Buttons key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
