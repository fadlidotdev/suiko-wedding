import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";

const sectionStyle = {
  background: `
linear-gradient(
to right bottom,
rgba(252, 250, 246, 0.4),
rgba(209, 217, 223, 0.5)
),
url('/bg-couple-screen.jpg')
`,
  backgroundSize: "cover",
};

function Couple() {
  return (
    <Section
      headerComponent={
        <header>
          <Heading>Assalamu’alaikum Wr. Wb.</Heading>
          <p>
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, Insya Allah kami akan
            menyelenggarakan acara pernikahan :
          </p>
        </header>
      }
      className="space-y-5"
      id="couple"
      style={sectionStyle}
    >
      <div className="bg-white/50 p-4 w-80 mx-auto shadow-xl">
        <img
          src="/images/gallery-06.jpg"
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
          <h3 className="text-xl font-semibold drop-shadow-md">
            Meilynda Sari Kusumaningrum S.E, M.M
          </h3>
          <p className="text-sm">Putri dari Bapak Suharto & Ibu Sumini</p>
        </div>

        <span className="font-heading font-bold text-4xl">&amp;</span>

        <div>
          <h3 className="text-xl font-semibold drop-shadow-md">Rayhan Akbar S.Kom</h3>
          <p className="text-sm">Putra dari Bapak Yulias Dedy (Alm) & Ibu Silfia Elinda</p>
        </div>
      </div>
    </Section>
  );
}

export default Couple;
