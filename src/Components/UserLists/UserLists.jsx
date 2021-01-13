import React, { useEffect, useContext } from "react";
import axios from "axios";
import { DashBoardContext } from "../../Context_file/DashBoardContext";
import TopViews from "./TopViews";

const UserLists = () => {
  const [, setState] = useContext(DashBoardContext);

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("https://randomuser.me/api/?results=10", {
          "Content-Type": "application/json",
        })
        .then((res) => {
          const countries = res.data.results.map(
            ({ location: { country } }) => {
              return country;
            }
          );
          console.log("res.data", res.data);
          setState((data) => ({
            ...data,
            usersList: res.data.results,
            countries: countries,
          }));
        })
        .catch((error) =>
          error.response === undefined
            ? false
            : console.log("error.response.data", error.response.data)
        );
    };
    fetchUser();
  }, [setState]);
  return (
    <div>
      <TopViews />
    </div>
  );
};

export default UserLists;
