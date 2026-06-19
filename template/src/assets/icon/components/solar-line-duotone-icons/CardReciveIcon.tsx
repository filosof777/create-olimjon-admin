import React from "react";
import { useIcon } from "../IconContext";

const CardReciveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M19 14v6m0 0 2-2m-2 2-2-2"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 16H6m7 0h-.5M2 10h20"  opacity=".4"/></svg>
  );
};

export default CardReciveIcon;