import React from "react";
import { useIcon } from "../IconContext";

const SadCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1"/><ellipse cx="15" cy="10.5" fill="#1C274C" rx="1" ry="1.5"/><ellipse cx="9" cy="10.5" fill="#1C274C" rx="1" ry="1.5"/></svg>
  );
};

export default SadCircleIcon;