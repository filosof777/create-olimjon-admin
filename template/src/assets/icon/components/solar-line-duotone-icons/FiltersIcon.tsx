import React from "react";
import { useIcon } from "../IconContext";

const FiltersIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M6.5 10.189a6 6 0 1 0 7.106 3.669"/><path  stroke="currentColor"  strokeWidth="1.5" d="M12 20.472a6 6 0 1 0 5.5-10.283"  opacity=".5"/></svg>
  );
};

export default FiltersIcon;