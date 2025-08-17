
'use client';

import Image from "next/image";

export default  function HotelBlock({id, name, capacity}) {
  
  const imageLoader = ({src}) => {
    return `./hotels/${src}.jpeg`;
  };
  return (
    <div className="mb-4">
      <h2>{name}</h2>
      <p>capacity: { capacity }</p>
      <Image src={id} width={300} height={300} alt="" loader={imageLoader} />
    </div>
  );
}