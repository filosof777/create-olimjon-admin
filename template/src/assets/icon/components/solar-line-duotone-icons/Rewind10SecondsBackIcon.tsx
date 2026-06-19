import React from "react";
import { useIcon } from "../IconContext";

const Rewind10SecondsBackIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M14 4.5 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m7.5 10.5 2.5-2v7"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"/></svg>
  );
};

export default Rewind10SecondsBackIcon;