import React from "react";
import { useIcon } from "../IconContext";

const RecordMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M21 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-11 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M6.5 15h11"  opacity=".5"/></svg>
  );
};

export default RecordMinimalisticIcon;