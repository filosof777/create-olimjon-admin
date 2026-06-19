import React from "react";
import { useIcon } from "../IconContext";

const ExportIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M4 12a8 8 0 1 0 16 0"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M12 14V4m0 0 3 3m-3-3L9 7"/></svg>
  );
};

export default ExportIcon;