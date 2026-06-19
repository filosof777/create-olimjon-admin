import React from "react";
import { useIcon } from "../IconContext";

const ListArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m15 17.5 2.5 2.5m0 0 2.5-2.5M17.5 20v-6"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M21 6H3m18 4H3m8 4H3m8 4H3"  opacity=".5"/></svg>
  );
};

export default ListArrowDownIcon;