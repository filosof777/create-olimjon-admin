import React from "react";
import { useIcon } from "../IconContext";

const MaximizeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m9 15-7 7m0 0h5.857M2 22v-5.857"  opacity=".6"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m15 9 7-7m0 0h-5.857M22 2v5.857"/></svg>
  );
};

export default MaximizeIcon;