import React from "react";
import { useIcon } from "../IconContext";

const FerrisWheelIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="11" r="2"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M20.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-15-8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m13.5 13 5 9m-8-9-5 9"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z"  opacity=".5"/></svg>
  );
};

export default FerrisWheelIcon;