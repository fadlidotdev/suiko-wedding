import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";

const styleSection = {
  background: `
linear-gradient(
to right bottom,
rgba(252, 250, 246, 0.9),
rgba(209, 217, 223, 0.7)
),
url('/bg-timeline-screen.jpg')
`,
  backgroundSize: "cover",
};

const stories = [
  {
    dateString: "15 Maret 2022",
    header: "Awal Perkenalan",
    story: `Kami berteman sudah sejak SMA. Namun baru tahun lalu benar-benar memutuskan untuk komunikasi
  secara intens. LDR tidak menghalangi kami berkomitmen satu sama lain untuk melangkah ke
    jenjang pernikahan.`,
  },
  {
    dateString: "10 Desember 2022",
    header: "Lamaran",
    story: `Selama beberapa bulan menjalani hubungan akhirnya pada bulan desember kami lamaran. Alhamdulillah acara berjalan dengan baik dan lancar dihadiri kedua belah pihak keluarga.`,
  },
  {
    dateString: "27 Mei 2023",
    header: "Pernikahan",
    story: `Tgl 27 mei 2023 Insya  Allah akan menjadi hari yang spesial bagi kami,dimana kami akan mengucapkan janji suci di hadapan Allah SWT untuk menjadi sepasang suami istri. Mohon doa restunya semoga pernikahan kami mendapat ridho Allah SWT  dan acara dapat berjalan dengan lancar tanpa ada halangan & rintangan. Aamiin`,
  },
];

const TimelineItem = ({ dateString, header, story }) => (
  <li className="mb-10 ml-4">
    <div className="absolute p-2 bg-gray-200 border-2 border-white rounded-full w-6 h-6 -left-3 flex items-center justify-center">
      <span className="material-icons text-sm text-[#cf1c49]">favorite</span>
    </div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400">{dateString}</time>
    <h3 className="text-lg font-semibold text-dark">{header}</h3>
    <p className="mb-4 text-sm font-normal">{story}</p>
  </li>
);

function Timeline() {
  return (
    <Section headerComponent={<Heading>Cerita Cinta</Heading>} style={styleSection}>
      <ol className="relative border-l border-gray-300 text-left">
        {stories.map((story) => (
          <div key={story.header} data-aos="fade-in" data-aos-delay="200">
            <TimelineItem {...story} />
          </div>
        ))}
      </ol>
    </Section>
  );
}

export default Timeline;
