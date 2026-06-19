import React from "react";
import { useIcon } from "../IconContext";

const BowlingIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"/><circle cx="12" cy="7" r="1.5"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5" transform="rotate(-90 12 7)"/><circle cx="12" cy="12" r="1.5"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5" transform="rotate(-90 12 12)"/><path  stroke="currentColor"  strokeWidth="1.5" d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"  opacity=".5"/></svg>
  );
};

export default BowlingIcon;