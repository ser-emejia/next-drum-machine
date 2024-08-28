"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import { SoundContext } from "../../context/SoundProvider";

function Header() {
  const id = React.useId();

  const { isSoundEnabled, setIsSoundEnabled } = React.useContext(SoundContext);

  // TODO: Global state?
  // const soundEnabled = true;

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            setIsSoundEnabled(!isSoundEnabled);
            // TODO: flip `soundEnabled`
          }}
        >
          {isSoundEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {isSoundEnabled ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
