import React from "react";

function SubHero() {
  return (
    <div className="w-full flex items-center justify-center pb-16 px-8">
      <div className="flex gap-8">
        <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-blue-500 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
          <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Teaching</span>
        </div>

        <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-indigo-500 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
          <span className="font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">Resume</span>
        </div>

        <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-purple-500 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
          <span className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">MID Lab</span>
        </div>

        <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-pink-500 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
          <span className="font-semibold text-gray-700 group-hover:text-pink-600 transition-colors">Publications</span>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
