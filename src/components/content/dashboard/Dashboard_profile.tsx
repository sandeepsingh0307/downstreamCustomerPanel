import Image from "next/image";
import React from "react";

type Dashboard_profileProps = {
  name?: string;
  position?: string;
  address?: string;
  img?: string;
};

import { dummyProfileDetail } from "@/lib/constant";
import EditButton from "@/components/layout/EditButton";

const Dashboard_profile = ({
  name,
  position,
  address,
  img,
}: Dashboard_profileProps) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="w-full mx-10 border-2 border-foreground py-4 px-10 flex justify-between">
        <div className="flex gap-3">
          <div className="flex">
            <Image
              src={img ? img : dummyProfileDetail.img}
              width={100}
              height={100}
              className="rounded-full"
              alt="profile image"
            />
          </div>
          <div>
            <h3>{name ? name : dummyProfileDetail.name}</h3>
            <h6>{position ? position : dummyProfileDetail.position}</h6>
            <h6>{address ? address : dummyProfileDetail.address}</h6>
          </div>
        </div>
        {/* <EditButton href={""} label="edit" /> */}
      </div>
    </div>
  );
};

export default Dashboard_profile;
