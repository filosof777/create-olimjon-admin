import React from "react";
import { useIcon } from "../IconContext";

const CalendarSearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M7 4V2.5M17 4V2.5M2 9h20"  opacity=".5"/><circle cx="18" cy="18" r="3"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M20.5 20.5 22 22"/></svg>
  );
};

export default CalendarSearchIcon;