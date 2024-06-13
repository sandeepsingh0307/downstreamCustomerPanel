import React from "react";
import { Metadata } from "next";
// import Sidebar from "@/components/layout/Sidebar";
// import { getRootLayoutAPI } from "../../libs/apis/serverlessAPI";

export const metadata: Metadata = {
  metadataBase: new URL("https://website.in"),
  title: {
    default: "product pages",
    template: `%s | product`,
  },
  description: "product page",
  icons: "favicon.png",
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="root fullscreen ">
        <div className="root-container">
          <div className="pages_wrapper relative ">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
