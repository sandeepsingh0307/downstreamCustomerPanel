import MenuNav from "@/components/layout/MenuNav";
import { dashboardList } from "@/lib/dashboardData";
import React from "react";

const Dashboard_menubar = () => {
  return (
    <div className="w-full m-auto flex justify-center items-center mt-4">
      <MenuNav navData={dashboardList} />
    </div>
  );
};

export default Dashboard_menubar;
