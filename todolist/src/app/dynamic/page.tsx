import React from "react";
import dynamic from "next/dynamic";
import Img from "@/src/components/img/Img";
const Count = dynamic(() => import("@/src/components/count/Count"));

const page = async () => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://openapi.naver.com/v1/search/image?query=제주+라스또르따스&display=100&start=1&sort=sim",
        {
          headers: {
            "X-Naver-Client-Id": "12341234",
            "X-Naver-Client-Secret": "12342142",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("에러:", error);
    }
  };
  const data = await fetchData();
  return (
    <div>
      <p>헤더</p>
      <Count data={data.errorMessage} />
      <Img />
    </div>
  );
};

export default page;
