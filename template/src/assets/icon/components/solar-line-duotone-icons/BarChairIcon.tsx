import React from "react";
import { useIcon } from "../IconContext";

const BarChairIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.06 1.06 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 8 6 22m9-14 3 14"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M16.5 17h-9"  opacity=".5"/></svg>
  );
};

export default BarChairIcon;