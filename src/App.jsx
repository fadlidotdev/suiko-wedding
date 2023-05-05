import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import BottomNav from "./components/BottomNav";
import { useAppContext } from "./contexts/AppContextProvider";
import Couple from "./screen/Couple";
import Event from "./screen/Event";
import Gallery from "./screen/Gallery";
import HealthProtocal from "./screen/HealthProtocal";
import Home from "./screen/Home";
import Message from "./screen/Message";
import Timeline from "./screen/Timeline";
import Welcome from "./screen/Welcome";
import Dua from "./screen/Dua";
import SpecialInvite from "./screen/SpecialInvite";
import PlayStopSound from "./components/PlayStopSound";

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
          <PlayStopSound />
          <BottomNav />
          <Home />
          <Couple />
          <Event />
          <Timeline />
          <Gallery />
          <Dua />
          <Message />
          <SpecialInvite />
          <HealthProtocal />
          <div className="h-[80px] bg-gray-50" />
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
