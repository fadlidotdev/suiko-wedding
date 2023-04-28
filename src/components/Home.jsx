import React from "react";
import Section from "./Section";
import { useAppContext } from "./AppContextProvider";

const styleSection = {
  background: `
linear-gradient(
to right bottom,
rgba(252, 250, 246, 0.9),
rgba(209, 217, 223, 0.7)
),
url('/bg-home-screen.jpg')
`,
  backgroundSize: "cover",
};

function Home() {
  return (
    <Section id="home" style={styleSection}>
      <div className="flex flex-col gap-6">
        <div className="font-heading">
          <h2 className="text-6xl leading-[56px] font-bold drop-shadow-xl" data-aos="zoom-in">
            Meylinda <br />
            &amp;
            <br /> Rayhan
          </h2>
        </div>

        <img
          src="/images/home-leaf.png"
          width={150}
          className="home-leaf-animate block mx-auto rotate-45"
        />

        <div className="w-56 mx-auto">
          <span className="font-semibold text-lg">Sabtu</span>
          <div className="grid grid-cols-3 divide-x-2 divide-gray-400 font-bold text-2xl">
            <span>27</span>
            <span>05</span>
            <span>2023</span>
          </div>
        </div>

        <p>We invited you to celebrate our wedding</p>
      </div>
    </Section>
  );
}

export default Home;
