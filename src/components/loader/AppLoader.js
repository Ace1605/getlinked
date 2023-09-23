import React from "react";
import { AppColors } from "../../config/AppColors";
import { TailSpin } from "react-loader-spinner";

function AppLoader() {
  return (
    <TailSpin
      wrapperClass="justify-center"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      color={AppColors.WHITE}
      height={30}
      width={30}
      timeout={5000} //3 secs
    />
  );
}

export default AppLoader;
