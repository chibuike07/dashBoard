import React from "react";
import WelcomeNoteStyles from "../../Styles/LandingpageLeftView/WelcomeNote.module.css";

const WelcomeNote = () => {
  const { container, heading, header, paragraph } = WelcomeNoteStyles;

  return (
    <div className={container}>
      <div className={heading}>
        <p className={header}>
          <span>hello,</span> <strong>emerald</strong>
        </p>
        <p className={paragraph}>
          welcome to your dashboard, kindly sort through the user base
        </p>
      </div>
    </div>
  );
};

export default WelcomeNote;
