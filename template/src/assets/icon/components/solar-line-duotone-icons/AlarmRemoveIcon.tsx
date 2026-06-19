import React from "react";
import { useIcon } from "../IconContext";

const AlarmRemoveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="13" r="9"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M15 13H9"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m3.5 4.5 4-2.5m13 2.5-4-2.5"/></svg>
  );
};

export default AlarmRemoveIcon;