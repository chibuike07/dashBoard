import React, { useRef, useState, useContext } from "react";
import ToggleButtonStyles from "../../Styles/UserLists/ToggleCountryVisiblity.module.css";
import { DashBoardContext } from "../../Context_file/DashBoardContext";

const ToggleCountryVisiblity = () => {
  const [{ showCountries }, setState] = useContext(DashBoardContext);
  const { overAllWrapper, container, wrapper, btn, text } = ToggleButtonStyles;
  const toggle = useRef();
  const [isToggling, setisToggling] = useState(false);

  const handleToggeleTrue = () => {
    if (showCountries === false) {
      toggle.current.style.transform = "translateX(100%)";
      setisToggling(true);
      setState((data) => ({
        ...data,
        showCountries: true,
      }));
    } else {
      toggle.current.style.transform = "translateX(0%)";
      setisToggling(false);
      setState((data) => ({
        ...data,
        showCountries: false,
      }));
    }
  };

  return (
    <div className={overAllWrapper}>
      <div
        className={container}
        style={{ backgroundColor: isToggling ? "rgb(48, 187, 181)" : "#eee" }}
      >
        <div className={wrapper} ref={toggle} onClick={handleToggeleTrue}>
          <div className={btn}></div>
        </div>
      </div>
      <div className={text}>
        <span>show country</span>
      </div>
    </div>
  );
};

export default ToggleCountryVisiblity;
