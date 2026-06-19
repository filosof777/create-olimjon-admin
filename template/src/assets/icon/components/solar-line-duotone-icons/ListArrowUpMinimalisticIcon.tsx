import React from "react";
import { useIcon } from "../IconContext";

const ListArrowUpMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M20 6H3m8 5H3m9 5H3"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M15 11.5 17.5 9m0 0 2.5 2.5M17.5 9v8"/></svg>
  );
};

export default ListArrowUpMinimalisticIcon;