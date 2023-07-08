import React from "react";
import Languages from "../../data/data";

export default function Skills() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {Languages.map((language, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform flex flex-col items-center justify-center"
          >
            <img className="w-8 sm:w-10 md:w-12" alt="" src={language.svg} />
            <h3 className="text-base sm:text-ml md:text-xl font-bold mt-5">
              {language.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
