import React, { useEffect } from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import { useAppContext } from "../contexts/AppContextProvider";

const sectionStyle = {
  background: `
linear-gradient(
  to right bottom,
  rgba(252, 250, 246, 0.9),
  rgba(209, 217, 223, 0.7)
),
url('/bg-welcome-screen.jpg')
`,
};

function Welcome({ onOpenInvitation }) {
  const { search } = window.location;
  const { visitorName, setVisitorName } = useAppContext();

  useEffect(() => {
    if (!search) return;

    const searchParams = new URLSearchParams(search);
    setVisitorName(searchParams.get("name"));
  }, [search]);

  return (
    <Section style={sectionStyle}>
      <div>
        <div className="relative -top-16">
          <h1 className="font-heading text-6xl drop-shadow-xl font-bold">
            Meilynda <br />
            &amp;
            <br /> Rayhan
          </h1>

          <div className="flex flex-col gap-4 my-8">
            <span>Bapak/Ibu/Saudara/i</span>
            <h2 className="text-2xl font-bold">{visitorName}</h2>

            <p className="text-sm">
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang Anda untuk menghadiri acara
              pernikahan kami.
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 space-y-4">
          <Button onClick={onOpenInvitation}>Buka Undangan</Button>

          <p>
            <small>* Mohon maaf apabila ada kesalahan penulisan nama/gelar</small>
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Welcome;
