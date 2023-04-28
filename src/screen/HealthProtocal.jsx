import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";

function HealthProtocal() {
  return (
    <Section
      className="bg-gray-50"
      isFullScreen={false}
      headerComponent={
        <header>
          <Heading>Protokol Kesehatan</Heading>
          <p>
            Guna mencegah penyebaran Covid-19, diharapkan bagi tamu undangan untuk mematuhi Protokol
            Kesehatan di bawah ini :
          </p>
        </header>
      }
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2" data-aos="zoom-in">
          <span className="material-icons text-3xl block mx-auto w-8 h-8">clean_hands</span>
          <span className="font-semibold text-sm">Cuci Tangan</span>
        </div>

        <div className="flex flex-col gap-2" data-aos="zoom-in">
          <span className="material-icons text-3xl block mx-auto w-8 h-8">sanitizer</span>
          <span className="font-semibold text-sm">Gunakan Hand Sanitizer</span>
        </div>

        <div className="flex flex-col gap-2" data-aos="zoom-in">
          <span className="material-icons text-3xl block mx-auto w-8 h-8">masks</span>
          <span className="font-semibold text-sm">Gunakan Masker</span>
        </div>

        <div className="flex flex-col gap-2" data-aos="zoom-in">
          <span className="material-icons text-3xl block mx-auto w-8 h-8">social_distance</span>
          <span className="font-semibold text-sm">Jaga Jarak</span>
        </div>
      </div>
    </Section>
  );
}

export default HealthProtocal;
