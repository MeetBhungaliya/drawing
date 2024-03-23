import React from "react";

const Colors = () => {
  return (
    <div>
      <div className="size-10 relative overflow-hidden rounded-[4px]">
        <div className="w-full aspect-square bg-blue-500"/>
        <div className="w-[200%] aspect-square absolute right-0 bottom-[40%] -rotate-45 bg-red-500"/>
      </div>
    </div>
  );
};

export default Colors;
