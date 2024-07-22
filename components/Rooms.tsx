"use client";

import { useState, useEffect } from "react";
import RoomList from "./RoomList";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      const res = await fetch("http://127.0.0.1:1337/api/rooms?populate=*", {
        next: { revalidate: 0 },
      });
      const data = await res.json();
      setRooms(data);
    };

    getRooms();
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <RoomList rooms={rooms} />
      </div>
    </section>
  );
};

export default Rooms;
