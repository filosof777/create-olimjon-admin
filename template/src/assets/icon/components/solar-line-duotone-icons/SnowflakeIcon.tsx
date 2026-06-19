import React from "react";
import { useIcon } from "../IconContext";

const SnowflakeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 2v16m0 4v-4m0 0 3 3m-3-3-3 3m6-18-3 3-3-3"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m3.34 7 3.464 2m0 0L12 12M6.804 9 5.706 4.902M6.804 9l-4.098 1.098M12 12l5.196 3M12 12l5.196-3M12 12l-5.196 3m10.392 0 3.464 2m-3.464-2 4.098-1.098M17.196 15l1.098 4.099M20.66 7l-3.464 2m0 0 1.098-4.098M17.196 9l4.098 1.098M6.804 15 3.34 17m3.464-2-4.098-1.098M6.804 15l-1.098 4.1"  opacity=".5"/></svg>
  );
};

export default SnowflakeIcon;