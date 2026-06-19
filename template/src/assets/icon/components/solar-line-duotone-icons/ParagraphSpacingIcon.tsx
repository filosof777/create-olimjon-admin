import React from "react";
import { useIcon } from "../IconContext";

const ParagraphSpacingIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M4 21h16M4 3h16"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m12 5.5 3 3m-3-3-3 3m3-3v13m0 0 3-3m-3 3-3-3"/></svg>
  );
};

export default ParagraphSpacingIcon;