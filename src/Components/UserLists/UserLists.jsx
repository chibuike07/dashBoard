import React, { useEffect, useContext } from "react";
import axios from "axios";
import { DashBoardContext } from "../../Context_file/DashBoardContext";
import TopViews from "./TopViews";

const UserLists = () => {
  const [, setState] = useContext(DashBoardContext);

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("https://randomuser.me/api/?page=1&results=3", {
          "Content-Type": "application/json",
        })
        .then((res) => {
          const countries = res.data.results.map(
            ({ location: { country } }) => {
              return country;
            }
          );

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
