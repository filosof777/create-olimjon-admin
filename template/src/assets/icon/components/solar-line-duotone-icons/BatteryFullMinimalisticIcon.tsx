import React from "react";
import { useIcon } from "../IconContext";

const BatteryFullMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 14v-4M7 9s.5.9.5 3-.5 3-.5 3m3.5-6s.5.9.5 3-.5 3-.5 3M14 9s.5.9.5 3-.5 3-.5 3"/></svg>
  );
};

export default BatteryFullMinimalisticIcon;