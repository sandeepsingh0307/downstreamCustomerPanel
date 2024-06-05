import React, { Children } from "react";

type BoxCenterProps = {
  children: React.ReactNode;
};
const BoxCenter = ({ children }: BoxCenterProps) => {
  return (
    <div className="flex gap-5 justify-around items-center">{children}</div>
  );
};

export default BoxCenter;
