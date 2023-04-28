import { useState } from "react";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Couple from "./components/Couple";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Message from "./components/Message";
import BottomNav from "./components/BottomNav";
import AudioPlayer from "./components/AudioPlayer";
import { useAppContext } from "./components/AppContextProvider";
import Timeline from "./components/Timeline";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);

  const { isPlayAudio, playAudio } = useAppContext();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleOpenInvitation = () => {
    playAudio();
    setIsWelcomeScreen(false);
  };

  const contentRenderer = () => (
    <>
      {isWelcomeScreen ? (
        <Welcome onOpenInvitation={handleOpenInvitation} />
      ) : (
        <main>
          <BottomNav />
          <Home />
          <Couple />
          <Event />
          <Gallery />
          <Timeline />
          <Message />
          <div className="h-[80px] bg-gray-200" />
        </main>
      )}
    </>
  );

  return (
    <>
      <AudioPlayer src="/bg-music.mp3" isPlay={isPlayAudio} />

      {contentRenderer()}
    </>
  );
}

export default App;
