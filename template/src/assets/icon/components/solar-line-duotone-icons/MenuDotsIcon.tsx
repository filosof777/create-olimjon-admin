import React from "react";
import { useIcon } from "../IconContext";

const MenuDotsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="5" cy="12" r="2"  stroke="currentColor"  strokeWidth="1.5"/><circle cx="12" cy="12" r="2"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><circle cx="19" cy="12" r="2"  stroke="currentColor"  strokeWidth="1.5"/></svg>
  );
};

export default MenuDotsIcon;