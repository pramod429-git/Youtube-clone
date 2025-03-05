import React from "react";

const Buttons = ({ name }) => {
  return (
    <div className="px-4 py-2 bg-slate-100 rounded-lg font-semibold text-center shadow-md cursor-pointer hover:bg-black hover:text-white">
      {name}
    </div>
  );
};

export default Buttons;
