import React from "react";
import { useIcon } from "../IconContext";

const FacemaskCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M16.5 20.5 17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"/><ellipse cx="15" cy="10.5" fill="#1C274C" rx="1" ry="1.5"/><ellipse cx="9" cy="10.5" fill="#1C274C" rx="1" ry="1.5"/></svg>
  );
};

export default FacemaskCircleIcon;