import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const appContext = createContext({});

function AppContextProvider(props) {
  const [visitorName, setVisitorName] = useState("");
  const [isPlayAudio, setIsPlayAudio] = useState(false);

  const playAudio = () => setIsPlayAudio(true);

  return (
    <appContext.Provider value={{ visitorName, setVisitorName, isPlayAudio, playAudio }}>
      {props.children}
    </appContext.Provider>
  );
}

export const useAppContext = () => useContext(appContext);

export default AppContextProvider;
