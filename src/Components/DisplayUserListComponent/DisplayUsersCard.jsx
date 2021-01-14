import React, { useContext } from "react";
import DisplayUserCardStyles from "../../Styles/displayUserCard/DisplayUserCard.module.css";
import Image from "../../Common/Image.component/Image";
import Button from "../../Common/Button.component/Button";
import { DashBoardContext } from "../../Context_file/DashBoardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLongArrowAltRight,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";

const DisplayUsersCard = () => {
  const [{ usersList }] = useContext(DashBoardContext);
  const {
    container,
    wrapper,
    img,
    image,
    userInfo,
    title,
    residence,
    emailWrapper,
    emails,
    phone,
    moreDetail,
    btn,
    icon,
  } = DisplayUserCardStyles;
  const UsersListData = usersList ? (
    usersList
      .filter((v, i) => i <= 2)
      .map(
        (
          {
            name: { first, last },
            picture: { medium },
            location: {
              street: { number, name },
              city,
              state,
            },
            email,
            cell,
          },
          index
        ) => {
          return (
            <div className={wrapper} key={index}>
              <div className={image}>
                <Image src={medium} alt={first} className={img} />
              </div>
              <div className={userInfo}>
                <div className={title}>
                  <h3>
                    {first} {last}
                  </h3>
                </div>
                <div className={residence}>
                  <span>
                    {number} {name}, {city}, {state}
                  </span>
                </div>
                <div className={emailWrapper}>
                  <div className={emails}>
                    <span>
                      <FontAwesomeIcon icon={faEnvelopeSquare} />
                    </span>
                    <span>{email}</span>
                  </div>
                  <div className={phone}>
                    <span>
                      <FontAwesomeIcon icon={faPhone} rotation={90} />
                    </span>
                    <span>{cell}</span>
                  </div>
                </div>
              </div>
              <div className={moreDetail}>
                <Button
                  text={
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className={icon}
                    />
                  }
                  className={btn}
                  backgroundColor=" rgb(48, 187, 181)"
                />
              </div>
            </div>
          );
        }
      )
  ) : (
    <div>
      <p>no data exist</p>
    </div>
  );
  return (
    // <ScrollBar style={{ width: "100%", height: "73%" }}>
    <div className={container}>{UsersListData}</div>
    // </ScrollBar>
  );
};

export default DisplayUsersCard;
