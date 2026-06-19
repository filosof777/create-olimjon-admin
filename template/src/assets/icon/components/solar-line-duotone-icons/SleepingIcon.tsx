import React from "react";
import { useIcon } from "../IconContext";

const SleepingIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M2 6v12m20 0v-2.357c0-1.995 0-2.993-.28-3.794a5 5 0 0 0-3.07-3.069c-.8-.28-1.798-.28-3.793-.28-.798 0-1.197 0-1.518.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357V16M2 16h20"/><path  stroke="currentColor"  strokeWidth="1.5" d="M9.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"  opacity=".5"/></svg>
  );
};

export default SleepingIcon;