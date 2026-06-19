import React from "react";
import { useIcon } from "../IconContext";

const TemperatureIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M12 22a5.5 5.5 0 0 0 3.439-9.793 1.11 1.11 0 0 1-.439-.86V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86A5.5 5.5 0 0 0 12 22Z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 0V5"/></svg>
  );
};

export default TemperatureIcon;