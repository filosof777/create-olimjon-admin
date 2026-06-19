import React from "react";
import { useIcon } from "../IconContext";

const AccessibilityIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452a3 3 0 0 0 .476 1.623L15 19"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 12v1.452a3 3 0 0 1-.476 1.623L9 19"/></svg>
  );
};

export default AccessibilityIcon;