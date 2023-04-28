import React from "react";

const linkClassName = "flex flex-col items-center justify-center text-xs";
const iconClassName = "text-2xl";

function BottomNav() {
  return (
    <div className="fixed bottom-4 w-full px-4 z-50">
      <div className="rounded bg-white/75 border-2 border-gray-400 text-gray-500 h-[65px]  flex items-center justify-around">
        <a className={linkClassName} href="#home">
          <span className={`material-icons ${iconClassName}`}>home</span>
          Home
        </a>
        <a className={linkClassName} href="#couple">
          <span className={`material-icons ${iconClassName}`}>people_alt</span>
          Mempelai
        </a>
        <a className={linkClassName} href="#event">
          <span className={`material-icons ${iconClassName}`}>event</span>
          Acara
        </a>
        <a className={linkClassName} href="#gallery">
          <span className={`material-icons ${iconClassName}`}>collections</span>
          Galeri
        </a>
        <a className={linkClassName} href="#message">
          <span className={`material-icons ${iconClassName}`}>chat_bubble</span>
          Ucapan
        </a>
      </div>
    </div>
  );
}

export default BottomNav;
