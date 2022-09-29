import Link from "next/link";
import React from "react";

const Hyperlink = ({ name, link }) => {

  return <Link href={link}>{name}</Link>;
};

export default Hyperlink;
