"use client";
import React from "react";

export const SoundContext = React.createContext();

const SoundProvider = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);

  return (
    <SoundContext.Provider value={{ isSoundEnabled, setIsSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
