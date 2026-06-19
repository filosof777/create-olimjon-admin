import React from "react";
import { useIcon } from "../IconContext";

const MinimalisticMagniferIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="11.5" cy="11.5" r="9.5"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m20 20 2 2"/></svg>
  );
};

export default MinimalisticMagniferIcon;