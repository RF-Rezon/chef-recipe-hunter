import React from "react";
import { PuffLoader } from "react-spinners";

const Spninner = () => {
  return (
    <div>
      <PuffLoader color="black" size={600} speedMultiplier={2} />
    </div>
  );
};

export default Spninner;
