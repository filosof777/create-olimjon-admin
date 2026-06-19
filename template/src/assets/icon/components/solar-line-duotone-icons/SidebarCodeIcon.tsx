import React from "react";
import { useIcon } from "../IconContext";

const SidebarCodeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M15 21V3"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m6 14-1 1 1 1m4.5 0 1 1-1 1M9 14l-1.5 4"/></svg>
  );
};

export default SidebarCodeIcon;