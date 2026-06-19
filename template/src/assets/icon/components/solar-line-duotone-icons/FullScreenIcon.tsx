import React from "react";
import { useIcon } from "../IconContext";

const FullScreenIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"/></svg>
  );
};

export default FullScreenIcon;