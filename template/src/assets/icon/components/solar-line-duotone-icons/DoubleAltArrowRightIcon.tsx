import React from "react";
import { useIcon } from "../IconContext";

const DoubleAltArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m11 19 6-7-6-7"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m7 19 6-7-6-7"  opacity=".5"/></svg>
  );
};

export default DoubleAltArrowRightIcon;