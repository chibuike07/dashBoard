import React, { useContext } from "react";
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
  const [{ showUsersList, page }, setState] = useContext(DashBoardContext);

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
  return (
    <div className={container}>
      <div className={wrapper}>
        <UserLists />
        {showUsersList ? <DisplayUsersCard /> : <PreviewUser />}
        <div className={belowButton}>
          <div className={belowWrapper}>
            <div className={download}>
              <span>
                <FontAwesomeIcon icon={faCloudDownloadAlt} /> download result
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
