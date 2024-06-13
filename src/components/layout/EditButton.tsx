import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

type EditButtonProps = {
  href?: string;
  label?: string;
};

const EditButton = ({ href, label }: EditButtonProps) => {
  return (
    <Link
      href={href ? href : ""}
      className="editBtn h-fit flex justify-around gap-1 px-1 py-1 items-center text-sm"
    >
      <Pencil size={14} />
      {label ? label : "edit"}
    </Link>
  );
};

export default EditButton;
