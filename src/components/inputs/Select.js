import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";
import Select from "react-select";

const Wrapper = styled.div`
  position: relative;

  .select__control--is-focused {
    background-color: transparent !important;
    border-color: ${AppColors.LightPurple};
  }

  .select__control--menu-is-open {
    border-color: 1px solid #fff !important;
    box-shadow: 0 0 0 1px transparent;
    background-color: transparent;
  }
  .css-13cymwt-control {
    background-color: transparent;
    border-color: ${AppColors.WHITE};
    border-radius: 0.2rem;
  }

  .css-1dimb5e-singleValue {
    color: ${AppColors.WHITE} !important;
  }

  .css-b62m3t-container {
    width: 100%;
  }
  .select__dropdown-indicator {
    color: ${AppColors.WHITE};
  }
  .select__clear-indicator,
  .css-1u9des2-indicatorSeparator {
    display: none;
  }
  #react-select-3-input:focus,
  #react-select-5-input:focus {
    border-color: transparent !important;
    --tw-ring-color: transparent;
  }
  .select__menu {
    color: #000;
  }

  #react-select-7-listbox li {
    &:hover {
      background-color: ${AppColors.Pinkish};
    }
  }
`;

function Selects({ holder, data, getCat, getNum, load, getting }) {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [selected, setSelected] = useState(null);
  const def = [{ value: "", label: getting ? "..." : holder }];
  const options = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
    { value: 20, label: 20 },
  ];

  useEffect(() => {
    if (load === true) {
      setSelected(null);
    }
  }, [load]);
  const formatToNameId = (param) => {
    if (param) {
      const formatted = param.map((x) => {
        return {
          value: x.name,
          label: x.name,
          id: x.id,
        };
      });
      return formatted;
    }
    return [];
  };

  useEffect(() => {
    if (data) {
      getCat(selected);
    } else {
      getNum(selected);
    }
  }, [selected]);

  return (
    <Wrapper>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={def[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        onChange={setSelected}
        isSearchable={isSearchable}
        name="selecting"
        options={data ? formatToNameId(data) : options}
        required
      />
    </Wrapper>
  );
}

export default Selects;
