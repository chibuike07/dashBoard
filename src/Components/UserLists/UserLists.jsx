import React, { useEffect, useContext } from "react";
import axios from "axios";
import { DashBoardContext } from "../../Context_file/DashBoardContext";
import TopViews from "./TopViews";

const UserLists = () => {
  const [{ gender, page, results, nationality }, setState] = useContext(
    DashBoardContext
  );

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get(
          `https://randomuser.me/api/?nat=${nationality}&page=${page}&results=${results}&gender=${gender}&noinfo`,
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          let countries = {};
          res.data.results.map(({ location: { country }, nat }) => {
            return (countries[country] = nat);
          });

          setState((data) => ({
            ...data,
            usersList: res.data.results,
            clonedUsersList: res.data.results,
            countries: countries,
          }));
        })
        .catch((error) =>
          error.response === undefined
            ? false
            : console.log("error.response.data", error.response.data.error)
        );
    };
    fetchUser();
  }, [setState, gender, page, results, nationality]);
  return (
    <div>
      <TopViews />
    </div>
  );
};

export default UserLists;
