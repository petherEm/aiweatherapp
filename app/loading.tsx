import { SunIcon } from "@heroicons/react/solid";

import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white">
      <SunIcon
        className="h-24 w-24 animate-bounce text-yellow-500"
        color="yellow"
      />

      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading City Weather Information
      </h1>

      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on, we are crunching the numbers & generating an AI summary of the
        Weather!
      </h2>
    </div>
  );
};

export default Loading;
