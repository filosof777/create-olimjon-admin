import React from "react";
import { useIcon } from "../IconContext";

const PowerIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 2v4"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8.5 3.706A9.003 9.003 0 0 0 12 21a9 9 0 0 0 3.5-17.294"/></svg>
  );
};

export default PowerIcon;