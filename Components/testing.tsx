import React from "react";
import { useState } from "react";

const Testing = () => {
  const [data, setData] = useState<string>("");
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8 mb-8">
        <h1 className="mb-8 mt-8 text-2xl text-center font-semibold">
          Test OnChange Event with Input Text
        </h1>
        <input
          type="text"
          placeholder="Something"
          className="border-2 text-center border-zinc-400 rounded px-4 py-2"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
    </>
  );
};

export default Testing;
