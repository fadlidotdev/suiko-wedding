import React from "react";
import Section from "./Section";
import Countdown from "./Countdown";
import Button from "./Button";
import Heading from "./Heading";

const marriedDate = new Date("2023-05-24");
const locationMapLink =
  "https://www.google.com/maps/place/MASJID+AGUNG+AT-TAQWA/@-3.8001466,102.2564691,17z/data=!4m6!3m5!1s0x2e36b018d42ffc83:0x47a42b6349b7762d!8m2!3d-3.8001466!4d102.2590494!16s%2Fg%2F15dpld3x";

const addToCalendarLink =
  "https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding+Fadli-Nova&details&dates=20230524/20230524&location=Restoran+hidden,+Sekolah+Berkuda,+Wedding+Venue+Jawa+Tengah+(Nirwana+Stable)";

const locationIframeSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3959.4111125356176!2d110.3379853!3d-7.0782443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7089e6d3d405e3%3A0x96a11f15e11b072!2sNirwana%20Stable!5e0!3m2!1sen!2sid!4v1682641599633!5m2!1sen!2sid";

const EventItem = ({ title, timeString }) => {
  return (
    <div className="bg-white/50 rounded p-6 shadow-lg space-y-6">
      <div className="space-y-2">
        <h3 className="font-heading text-4xl font-bold drop-shadow-xl">{title}</h3>

        <div className="w-56 mx-auto">
          <span className="font-semibold text-md">Sabtu</span>
          <div className="grid grid-cols-3 divide-x-2 divide-gray-400 font-bold text-xl">
            <span>27</span>
            <span>05</span>
            <span>2023</span>
          </div>
          <span className="text-sm mt-4 block">Pukul {timeString} WIB</span>
        </div>
      </div>
    </div>
  );
};

const CountdownItem = ({ title, subtitle }) => (
  <div className="flex flex-col border-gray-400 w-16 rounded-xl p-2 bg-gray-50/50 shadow-md">
    <span className="font-semibold text-xl">{title}</span>
    <span>{subtitle}</span>
  </div>
);

const styleSection = {
  background: `
linear-gradient(
to right bottom,
rgba(252, 250, 246, 0.9),
rgba(209, 217, 223, 0.7)
),
url('/bg-event-screen.jpg')
`,
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
};

function Event() {
  const onFinishCountdown = () => {};

  return (
    <Section id="event" style={styleSection} className="space-y-8">
      <Heading>Acara Kami</Heading>

      <div data-aos="flip-right" data-aos-delay="500">
        <EventItem title="Akad Nikah" timeString="08:00" />
      </div>

      <div className="space-y-6">
        <Countdown endDateTime={marriedDate} onFinish={onFinishCountdown}>
          {(timeLeft) => (
            <div className="flex items-center justify-center gap-6">
              <CountdownItem title={timeLeft.days} subtitle="hari" />
              <CountdownItem title={timeLeft.hours} subtitle="jam" />
              <CountdownItem title={timeLeft.minutes} subtitle="menit" />
              <CountdownItem title={timeLeft.seconds} subtitle="detik" />
            </div>
          )}
        </Countdown>
        <Button className="bg-gray-400">
          <a target="_blank" href={addToCalendarLink}>
            Ingatkan Saya
          </a>
        </Button>
      </div>

      <div data-aos="flip-right" data-aos-delay="500">
        <EventItem title="Resepsi" timeString="10:00" />
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-md">Alamat</h3>

          <p>Nirwana Stable, Purwosari, Mijen, Semarang City, Central Java 50217</p>
        </div>

        <iframe
          src={locationIframeSrc}
          width="500"
          height="450"
          className="border-8 border-gray-300 w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <Button>
          <a className="block" target="_blank" href={locationMapLink}>
            Lihat lokasi
          </a>
        </Button>
      </div>
    </Section>
  );
}

export default Event;
