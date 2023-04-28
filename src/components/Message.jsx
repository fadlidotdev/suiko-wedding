import React from "react";
import Section from "./Section";
import { useAppContext } from "./AppContextProvider";
import { supabase } from "../helpers/supabase";
import { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";
import Heading from "./Heading";

const Comment = ({ name, presence_status, comments }) => (
  <div className="bg-white p-2 shadow rounded text-sm">
    <div className="flex gap-1 items-center">
      <span className="font-semibold">{name}</span>
      <span>{presence_status === 1 && "✅"}</span>
    </div>
    <p>{comments}</p>
  </div>
);

function Message() {
  const [name, setName] = useState("");
  const { visitorName } = useAppContext();
  const [commentsData, setCommentsData] = useState([]);

  const [comments, setComments] = useState("");
  const [presenceStatus, setPresenceStatus] = useState(1);

  const handleChangeGreetings = (event) => setComments(event.target.value);
  const handleChangePresence = (event) => setPresenceStatus(parseInt(event.target.value));
  const handleChangeName = (event) => setName(event.target.value);

  const fetchComments = async () => {
    const response = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    setCommentsData(response.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await supabase.from("comments").insert([
      {
        name: visitorName,
        comments,
        presence_status: parseInt(presenceStatus),
      },
    ]);

    toast.success("RSUP berhasil dikirim");
    setComments("");
    setPresenceStatus(1);

    fetchComments();
  };

  return (
    <section id="message" className="bg-gray-200 p-5 space-y-5">
      <Toaster />

      <div className="text-center">
        <Heading>RSUV</Heading>
        <p>Silahkan konfirmasi kehadiran Anda</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2" data-aos="zoom-in">
        <input
          className="p-2"
          readOnly={!!visitorName}
          type="text"
          name="name"
          placeholder="Nama"
          value={visitorName || name}
          onChange={handleChangeName}
        />
        <textarea
          className="p-2"
          rows="10"
          onChange={handleChangeGreetings}
          value={comments}
          placeholder="Berikan Ucapan Dan Doa restu"
        ></textarea>
        <select className="p-2" onChange={handleChangePresence}>
          <option value="1">Hadir</option>
          <option value="0">Tidak Hadir</option>
        </select>

        <Button className="mt-2 w-auto flex-shrink-0 self-start" type="submit">
          Kirimkan Ucapan
        </Button>
      </form>

      {commentsData.length > 0 && (
        <div className="max-h-56 overflow-auto bg-gray-300 p-4 rounded">
          <div data-aos="zoom-out" className="flex flex-col gap-2">
            {commentsData?.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Message;
