const getRoomData = async ({ params }: { params: any }) => {
  const res = await fetch(
    `http://127.0.0.1:1337/api/rooms/${params.id}?populate=*`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return await res.json();
};
const RoomDetails = async ({ params }: { params: any }) => {
  const room = await getRoomData({ params });
  const imgURL = `http://127.0.0.1:1337${room.data.attributes.image.data.attributes.url}`;
  console.log(imgURL);
  return <div></div>;
};

export default RoomDetails;
