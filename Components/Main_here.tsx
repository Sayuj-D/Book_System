import React from "react";
const Main_here = () => {
  return (
    <>
      <div>
        <p>This is Test</p>
        <input
          type="text"
          placeholder="Name Here"
          className="border-2 rounded"
          name="username"
          id="1"
        />
        <img
          title="This is a image"
          src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-1200x800.jpg"
          alt="image here"
          className="max-w-50 max-h-50 rounded-2xl"
        />
      </div>
    </>
  );
};

export default Main_here;
