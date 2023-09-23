import React from "react";
import { AppColors } from "../../config/AppColors";
import { TailSpin } from "react-loader-spinner";

function ColoredLoader({ bg }) {
  return (
    <TailSpin
      wrapperClass="justify-center"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      color={bg}
      height={30}
      width={30}
      timeout={5000} //3 secs
    />
  );
}

export default ColoredLoader;
