import React from "react";

const Page = async () => {
  const data = (await (await getUsers()).json()) as Array<any>;
  return (
    <>
      <h2>SSG</h2>
      <ul>
        {Array.isArray(data)
          ? data.map((v, i) => {
              return <li key={v.id}>{v.name}</li>;
            })
          : null}
      </ul>
    </>
  );
};

const getUsers = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    // cache : 'force-cache'
  });
};

export default Page;
