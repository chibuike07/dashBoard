import React, { useEffect, useContext } from "react";
import axios from "axios";
import { DashBoardContext } from "../../Context_file/DashBoardContext";
import UserSearchBar from "../LandingPageLeftView/UserSearchBar";
import TopViews from "./TopViews";

const UserLists = () => {
  const [{ usersList }, setState] = useContext(DashBoardContext);
  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("https://randomuser.me/api/?results=10", {
          "Content-Type": "application/json",
        })
        .then(async (res) => {
          const countries = await res.data.results.map(
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
