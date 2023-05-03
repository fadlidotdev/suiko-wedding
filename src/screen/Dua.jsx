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
        <p className="text-xl">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami. apabila bapak/ibu/saudara(i)
          berkenan hadir untuk memberikan do'a restu kepada kedua mempelai, Atas kehadiran dan doa
          restu nya kami ucapkan terimakasih
        </p>

        <p className="text-lg">
          Wassalamualaikum <br /> warahmatullahi wabarakatuh
        </p>
      </div>
    </Section>
  );
}

export default Dua;
