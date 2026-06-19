import React from "react";
import { useIcon } from "../IconContext";

const BedsideTable3Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M19 22v-1.5M5 22v-1.5"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 15.5h6m-6-9h6"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 11h20"  opacity=".4"/></svg>
  );
};

export default BedsideTable3Icon;