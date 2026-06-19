import React from "react";
import { useIcon } from "../IconContext";

const ListArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M21 6H3m18 4H3m8 4H3m8 4H3"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M20 16.5 17.5 14m0 0L15 16.5m2.5-2.5v6"/></svg>
  );
};

export default ListArrowUpIcon;