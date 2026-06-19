import React from "react";
import { useIcon } from "../IconContext";

const GalleryCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="15" cy="9" r="2"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m20 17.6-2.224-2a3 3 0 0 0-3.732-.225l-.298.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104L2.28 12.253"  opacity=".5"/><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"/></svg>
  );
};

export default GalleryCircleIcon;