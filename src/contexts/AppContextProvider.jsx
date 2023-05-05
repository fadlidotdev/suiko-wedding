import React, { createContext, useContext, useState } from "react";

const appContext = createContext({});

function AppContextProvider(props) {
  const [visitorName, setVisitorName] = useState("");
  const [isPlayAudio, setIsPlayAudio] = useState(false);

  const playAudio = () => setIsPlayAudio(true);
  const stopAudio = () => setIsPlayAudio(false);

  return (
    <appContext.Provider value={{ visitorName, setVisitorName, isPlayAudio, playAudio, stopAudio }}>
      {props.children}
    </appContext.Provider>
  );
}

export const useAppContext = () => useContext(appContext);

export default AppContextProvider;
