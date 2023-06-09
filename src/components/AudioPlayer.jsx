import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

function AudioPlayer({ isPlay = false, src, children }) {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  useEffect(() => {
    if (isPlay) playAudio();
    else pauseAudio();
  }, [isPlay]);

  return (
    <>
      {children && <div onClick={playAudio}>{children}</div>}

      <audio ref={audioRef}>
        <source src={src} type="audio/mp3" />
      </audio>
    </>
  );
}

AudioPlayer.propTypes = {
  isPlay: PropTypes.bool,
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default AudioPlayer;
