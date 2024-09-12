"use client";

import { useState } from "react";
import { getUser } from "./utils/getUser";

export default function Home() {
  // Awaited로 getUser 함수의 비동기 결과 타입을 추론
  const [users, setUsers] = useState<Awaited<ReturnType<typeof getUser>>>([]);

  return (
    <div>
      <p className="text-lg font-bold">유저리스트</p>
      {users.map((user) => {
        return (
          <div key={user.id} className="bg-slate-500 my-2">
            <p>name : {user.name}</p>
            <p>email : {user.email}</p>
          </div>
        );
      })}
      <button
        onClick={async () => {
          try {
            const result = await getUser();
            console.log(result);
            setUsers(result);
          } catch (error) {
            console.error(error);
          }
        }}
        className="bg-green-500 hover:bg-green-400 p-2 text-white rounded-lg"
      >
        유저얻기
      </button>
    </div>
  );
}
