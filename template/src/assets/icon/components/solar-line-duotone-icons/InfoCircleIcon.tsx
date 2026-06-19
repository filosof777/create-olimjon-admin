import React from "react";
import { useIcon } from "../IconContext";

const InfoCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 17v-6"/><circle cx="1" cy="1" r="1"  fill="currentColor" transform="matrix(1 0 0 -1 11 9)"/></svg>
  );
};

export default InfoCircleIcon;