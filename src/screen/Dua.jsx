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
url('/bg-dua-screen.jpg')
`,
  backgroundSize: "cover",
};

function Dua() {
  return (
    <Section id="dua" style={sectionStyle}>
      <div data-aos="zoom-in" className="space-y-4">
        <p className="text-lg">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu
          dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
          menjadikan di antaramu rasa kasih dan sayang.
        </p>

        <p className="text-md">-QS Ar-Rum Ayat 21-</p>
      </div>
    </Section>
  );
}

export default Dua;
