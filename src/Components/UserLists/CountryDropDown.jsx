import React, { useContext, useState } from "react";
import CountryDropDownStyles from "../../Styles/UserLists/CountryDropDown.module.css";
import Input from "../../Common/Input.component/Input";
import DataList from "../../Common/DataLstComponent/DataList";
import { DashBoardContext } from "../../Context_file/DashBoardContext";

const CountryDropDown = () => {
  const { container, form, input } = CountryDropDownStyles;
  const [{ countries, showCountries }, setState] = useContext(DashBoardContext);

  const [country, setcountry] = useState("");

  const handleFindUserByCountry = async (nationality) => {
    setcountry(nationality);

    if (countries[nationality]) {
      await setState((data) => ({
        ...data,
        nationality: countries[nationality].toLowerCase(),
      }));
    } else {
      await setState((data) => ({
        ...data,
        nationality: "",
      }));
    }
  };

  return (
    <div className={container}>
      <form className={form}>
        <Input
          type="text"
          placeholder="country"
          name="country"
          value={country}
          onChange={(e) => handleFindUserByCountry(e.target.value)}
          list="country"
          className={input}
          readOnly={showCountries}
        />
        {countries && (
          <DataList dataArray={Object.keys(countries)} id="country" />
        )}
      </form>
    </div>
  );
};

export default CountryDropDown;
