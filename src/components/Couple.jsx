import React from "react";
import Section from "./Section";

function Couple() {
  return (
    <Section
      className="flex flex-col gap-4"
      id="couple"
      style={{
        background: `
    linear-gradient(
    to right bottom,
    rgba(252, 250, 246, 0.4),
    rgba(209, 217, 223, 0.5)
    ),
    url('/bg-couple-screen.jpg')
    `,
        backgroundSize: "cover",
      }}
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Assalamu’alaikum Wr. Wb.</h2>
        <p className="text-sm">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, Insya Allah kami akan
          menyelenggarakan acara pernikahan :
        </p>
      </div>

      <div className="bg-white/50 p-4 w-80 mx-auto shadow-xl">
        <img
          src="/images/gallery-05.jpg"
          alt=""
          className="h-full w-full mx-auto couple-photo-animate"
          data-aos="fade-in"
          data-aos-delay="500"
          height="200"
          width="300"
        />
      </div>

      <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-delay="1000">
        <div>
          <h3 className="text-xl font-semibold drop-shadow-md">Meylinda, S.Pd</h3>
          <p>Putri dari Bapak Maman Permana & Ibu Entin</p>
        </div>

        <span className="font-heading font-bold text-4xl">&amp;</span>

        <div>
          <h3 className="text-xl font-semibold drop-shadow-md">Rayhan, M. Ag</h3>
          <p>Putra dari Bapak Adang Hasim (Alm) & Ibu Elang</p>
        </div>
      </div>
    </Section>
  );
}

export default Couple;
