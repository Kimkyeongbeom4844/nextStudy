import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>/apple 레이아웃</div>
      {children}
    </>
  );
};

export default Layout;
