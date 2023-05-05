import React from "react";
import { useAppContext } from "../contexts/AppContextProvider";

function PlayStopSound() {
  const { isPlayAudio, playAudio, stopAudio } = useAppContext();

  return (
    <button
      className="fixed top-5 right-5 bg-black/25 w-7 h-7 rounded-full flex items-center justify-center"
      onClick={isPlayAudio ? stopAudio : playAudio}
    >
      <span className={`material-icons text-white text-[16px]`}>
        {isPlayAudio ? "volume_up" : "volume_off"}
      </span>
    </button>
  );
}

export default PlayStopSound;
