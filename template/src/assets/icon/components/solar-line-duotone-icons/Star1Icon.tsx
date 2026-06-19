import React from "react";
import { useIcon } from "../IconContext";

const Star1Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M17.657 6.343 15.96 8.04m-7.92 7.92-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92 1.697 1.697"  opacity=".5"/></svg>
  );
};

export default Star1Icon;