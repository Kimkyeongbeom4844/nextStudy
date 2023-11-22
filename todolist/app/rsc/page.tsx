import Count from "@/components/count/Count";
import React from "react";

const Page = async () => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://openapi.naver.com/v1/search/image?query=제주+라스또르따스&display=100&start=1&sort=sim",
        {
          headers: {
            "X-Naver-Client-Id": process.env?.NAVER_CLIENT_ID ?? "12341234",
            "X-Naver-Client-Secret":
              process.env?.NAVER_CLIENT_SECRET ?? "12342142",
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
      <p>{data.errorMessage}</p>
      <Count />
    </div>
  );
};

export default Page;
