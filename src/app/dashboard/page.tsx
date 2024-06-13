"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Dashboard_menubar from "@/components/content/dashboard/Dashboard_menubar";
import Dashboard_profile from "@/components/content/dashboard/Dashboard_profile";
const page = () => {
  return (
    <section>
      <Dashboard_menubar />
      <Dashboard_profile />
    </section>
  );
};

export default page;
