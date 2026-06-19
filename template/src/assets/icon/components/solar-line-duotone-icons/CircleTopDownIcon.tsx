import React from "react";
import { useIcon } from "../IconContext";

const CircleTopDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m21 3-9 9m0 0h5.344M12 12V6.656"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"  opacity=".5"/></svg>
  );
};

export default CircleTopDownIcon;