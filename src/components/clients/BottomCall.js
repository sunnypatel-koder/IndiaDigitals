import React from "react";

const BottomCall = ({ Company_Name }) => {
  return (
    <div className="w-[80%] mb-10">
      <h1 className="my-12 text-3xl font-medium">
        Facing similar challenges to {Company_Name}? See how we can help.
      </h1>
      <a
        href="/basic-detail"
        className="bg-green-600 text-white font-semibold py-3 px-2 rounded-lg"
      >
        Schedule a Call
      </a>
    </div>
  );
};

export default BottomCall;
