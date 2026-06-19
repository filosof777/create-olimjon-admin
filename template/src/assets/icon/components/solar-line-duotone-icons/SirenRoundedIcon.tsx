import React from "react";
import { useIcon } from "../IconContext";

const SirenRoundedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M20 22v-6a8 8 0 1 0-16 0v6"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14.29 11.5a4 4 0 0 1 2.21 2.21M2 22h20M12 2v3m9 1-1.5 1.5M3 6l1.5 1.5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 19v3"  opacity=".5"/></svg>
  );
};

export default SirenRoundedIcon;