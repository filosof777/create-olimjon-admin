import React from "react";
import { useIcon } from "../IconContext";

const Bill1Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 2h20"/><path  stroke="currentColor"  strokeWidth="1.5" d="M4 2h16v10.277c0 1.34 0 2.01-.268 2.601s-.773 1.032-1.781 1.915l-2 1.75c-1.883 1.647-2.824 2.47-3.951 2.47s-2.068-.823-3.951-2.47l-2-1.75c-1.009-.883-1.513-1.324-1.78-1.915C4 14.288 4 13.618 4 12.278z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8.5 13h7m-7-5h7"/></svg>
  );
};

export default Bill1Icon;