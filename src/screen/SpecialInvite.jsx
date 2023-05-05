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
url('/bg-special-screen.jpg')
`,
  backgroundSize: "cover",
};

function SpecialInvite() {
  return (
    <Section
      id="special-invite"
      style={sectionStyle}
      headerComponent={<Heading>Turut Mengundang</Heading>}
    >
      <div data-aos="zoom-in" className="space-y-4 mb-8">
        <p className="text-lg">
          Keluarga Besar mempelai Wanita <br />
          Keluarga Besar Mempelai Pria
        </p>

        <p className="text-lg">
          Atas kehadiran dan do'a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan Terima
          Kasih.
        </p>

        <p className="text-lg">Wassalamu'alaikum Wr.Wb.</p>

        {/* <p className="text-lg font-bold">Meilynda & Rayhan</p> */}
      </div>

      <h2 className="text-3xl font-bold drop-shadow-xl font-heading" data-aos="zoom-in">
        Meilynda &amp; Rayhan
      </h2>
    </Section>
  );
}

export default SpecialInvite;
