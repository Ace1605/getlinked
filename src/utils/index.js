import { useEffect, useState } from "react";

export const truncateStr = (str, n) => {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
};

export const getToken = () => {
  const token = localStorage.getItem("PRivalsToken");

  return token;
};

export const formatToHyphen = (payload) => {
  if (payload) {
    return payload.split(" ").join("-").toLowerCase();
  }

  return payload;
};

export const formatDateToHypen = (data) => {
  if (data) {
    const yourDate = new Date(data);
    return yourDate.toISOString().split("T")[0];
  }
  return "";
};

export const formatAmount = (num = "", separator = ",") => {
  if (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) || 0;
  }
  return "";
};

export const Checkbox = ({ getChecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    getChecked(isChecked);
  }, [isChecked]);

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(!isChecked);
          }}
          className={isChecked ? "checked" : ""}
        />
      </label>
    </div>
  );
};

export function convertToUrlString(val) {
  return val.split(" ").join("-").toLowerCase();
}
