import React, { useContext, useEffect, useState } from "react";
import UserLists from "../../Components/UserLists/UserLists";
import UserListPageStyles from "../../Styles/UserLists/UserListPage.module.css";
import DisplayUsersCard from "../../Components/DisplayUserListComponent/DisplayUsersCard";
import PreviewUser from "../../Components/DisplaySpecifiedUser/PreviewUser";
import { DashBoardContext } from "../../Context_file/DashBoardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Common/Button.component/Button";
import { CSVLink } from "react-csv";
import { headers } from "../../utils/CsvHeaders";

const UserListPage = () => {
  const {
    container,
    wrapper,
    belowButton,
    belowWrapper,
    download,
    button,
    btn,
  } = UserListPageStyles;
  const [
    {
      showAllList,
      page,
      usersList,
      tags,
      specifiedUserData,
      handleDownColor,
      showPreview,
    },
    setState,
  ] = useContext(DashBoardContext);
  const [singleUserData, setsingleUserData] = useState([]);
  const [mutiUserData, setmultiUserData] = useState([]);
  const [csvHeader, setcsvHeader] = useState([]);

  const handlepagination = (id) => {
    switch (id) {
      case "next":
        setState((data) => ({
          ...data,
          page: data.page + 1,
        }));

        break;

      case "prev":
        page >= 2
          ? setState((data) => ({
              ...data,
              page: data.page - 1,
            }))
          : setState((data) => ({
              ...data,
              page: 1,
            }));

        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const spreadUserData = () => {
      let userData;
      const { cell, gender, nat, phone, email, dob, names, picture, location } =
        specifiedUserData && specifiedUserData;

      names
        ? (userData = {
            title: names.title,
            first: names.first,
            last: names.last,
            gender,
            age: dob.age,
            phone,
            email,
            cell,
            nat,
            city: location.city,
            state: location.state,
            country: location.country,
            picture: picture.medium,
          })
        : (userData = undefined);
      setsingleUserData(userData);

      setcsvHeader(headers);
    };
    spreadUserData();

    const spreadMultiUserData = () => {
      let userData;
      let alluserData =
        UserLists &&
        usersList.map(
          ({
            cell,
            gender,
            nat,
            phone,
            email,
            dob,
            name,
            picture,
            location,
          }) => {
            name
              ? (userData = {
                  title: name.title,
                  first: name.first,
                  last: name.last,
                  gender,
                  age: dob.age,
                  phone,
                  email,
                  cell,
                  nat,
                  city: location.city,
                  state: location.state,
                  country: location.country,
                  picture: picture.medium,
                })
              : (userData = undefined);
            return userData;
          }
        );

      setmultiUserData(alluserData);
      setcsvHeader(headers);
    };
    spreadMultiUserData();

    return [spreadUserData];
  }, [specifiedUserData, usersList]);
  return (
    <div className={container}>
      <div className={wrapper}>
        <UserLists />
        {showAllList && <DisplayUsersCard />}
        {showPreview && <PreviewUser />}
        <div className={belowButton}>
          <div className={belowWrapper}>
            <div
              className={download}
              style={{
                backgroundColor: handleDownColor
                  ? "rgb(123, 106, 194)"
                  : "rgb(196, 175, 230)",
              }}
            >
              <FontAwesomeIcon icon={faCloudDownloadAlt} color="#fff" />
              <span>
                <CSVLink
                  data={
                    singleUserData
                      ? [singleUserData]
                      : mutiUserData && mutiUserData
                  }
                  headers={csvHeader ? csvHeader : usersList}
                  filename={`${tags}.csv`}
                  className="btn btn-primary"
                  target="_blank"
                >
                  download result
                </CSVLink>
              </span>
            </div>
            <div className={button}>
              <Button
                text={
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    color="#000"
                    opacity="0.4"
                  />
                }
                click={() => handlepagination("prev")}
                className={btn}
                backgroundColor="rgb(238 238 246)"
              />
              <Button
                text={<FontAwesomeIcon icon={faAngleRight} />}
                className={btn}
                backgroundColor="rgb(162 163 178)"
                click={() => handlepagination("next")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListPage;
