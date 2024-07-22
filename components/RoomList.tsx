"use  client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const RoomList = ({ rooms }: { rooms: any }) => {
  return (
    <section className="py-16 min-h-[90vh]">
      {/**image & title */}
      <div className="flex flex-col items-center">
        {/**image */}
        <div className="relative w-[82px] h-[20px]">
          <Image
            src={"/assets/heading-icon.svg"}
            alt="room"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="h2 mb-8">Our room</h2>
      </div>
      {/**tabs */}
      <div>tabs</div>
      {/**room list */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rooms.data.map((room: any) => {
          const imgURL = `http://127.0.0.1:1337${room.attributes.image.data?.attributes.url}`;

          return (
            <div key={room.id}>
              <Link href={`/room/${room.id}`}>
                <div className="relative h-[300px] w-full overflow-hidden mb-6">
                  <Image
                    src={imgURL}
                    fill
                    priority
                    alt="room"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="h-[134px]">
                <div className="flex items-center justify-between mb-5">
                  <div>Capacity: {room.attributes.capacity} person(s)</div>
                  <div className="flex gap-1 text-accent">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                </div>
                <Link href={`/room/${room.id}`}>
                  <h3 className="h3">{room.attributes.title}</h3>
                </Link>

                <p
                  className={`h4 font-secondary font-medium  ${
                    room.attributes.discount ? "line-through" : "text-accent"
                  }`}
                >
                  {room.attributes.price}

                  <span className="text-base text-secondary"> $ /night</span>
                </p>
                {room.attributes.discount && (
                  <p className="h4 text-accent">
                    {room.attributes.discount} $ /night
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomList;
