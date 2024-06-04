import React from "react";
type BoxWrapperProps = {
  children: React.ReactNode;
};
const BoxWrapper = ({ children }: BoxWrapperProps) => {
  return (
    <div className="w-full flex justify-center items-center m-auto">
      <div className="w-[95%] sm:w-4/5 md:w-3/5 xl:w-2/5  md:mx-10 my-2 md:my-5 py-5">
        {children}
      </div>
    </div>
  );
};

export default BoxWrapper;
