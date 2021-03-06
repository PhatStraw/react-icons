import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

const Bare = () => {
  return (
    <IconContext.Provider value={{ style: { fontSize: '30px', color: "rgb(0, 123, 255)" } }}>
      <div>
        <FaTwitter />
      </div>
    </IconContext.Provider>
  );
};

export default Bare;