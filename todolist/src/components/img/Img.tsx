import React from "react";
import Image from "next/image";

const Img = () => {
  return (
    <Image src={"/bearJeans.gif"} alt={"곰진스"} width={200} height={200} />
  );
};

export default Img;
