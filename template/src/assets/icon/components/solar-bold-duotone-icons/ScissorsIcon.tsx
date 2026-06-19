import React from "react";
import { useIcon } from "../IconContext";

const ScissorsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M6.654 1.633a.75.75 0 1 0-1.308.735L15.704 20.79a3.75 3.75 0 1 0-.136-3.303z"  opacity=".5"/><path  fill="currentColor" d="M17.346 1.633a.75.75 0 0 1 1.308.735L8.296 20.79a3.75 3.75 0 1 1 .136-3.303z"/></svg>
  );
};

export default ScissorsIcon;