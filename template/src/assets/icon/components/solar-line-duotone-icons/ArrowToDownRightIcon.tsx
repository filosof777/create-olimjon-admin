import React from "react";
import { useIcon } from "../IconContext";

const ArrowToDownRightIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m7 14.5 5 5 5-5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 19.5v-10c0-1.667 1-5 5-5"  opacity=".5"/></svg>
  );
};

export default ArrowToDownRightIcon;