import React, { useContext, useState } from "react";
import CountryDropDownStyles from "../../Styles/UserLists/CountryDropDown.module.css";
import Input from "../../Common/Input.component/Input";
import DataList from "../../Common/DataLstComponent/DataList";
import { DashBoardContext } from "../../Context_file/DashBoardContext";

const CountryDropDown = () => {
  const { container, form, input } = CountryDropDownStyles;
  const [{ countries, showCountries }] = useContext(DashBoardContext);
  const [country, setcountry] = useState("");

  return (
    <div className={container}>
      <form className={form}>
        <Input
          type="text"
          placeholder="country"
          name="country"
          value={country}
          onChange={(e) => setcountry(e.target.value)}
          list="country"
          className={input}
          readOnly={showCountries}
        />
        {countries && <DataList dataArray={countries} id="country" />}
      </form>
    </div>
  );
};

export default CountryDropDown;
