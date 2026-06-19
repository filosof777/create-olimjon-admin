import React from "react";
import { useIcon } from "../IconContext";

const FullScreenCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"/><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/></svg>
  );
};

export default FullScreenCircleIcon;