import React from "react";
import { useIcon } from "../IconContext";

const PaletteRoundIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"/><path  stroke="currentColor"  strokeWidth="1.5" d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"/><path  stroke="currentColor"  strokeWidth="1.5" d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"  opacity=".5"/></svg>
  );
};

export default PaletteRoundIcon;