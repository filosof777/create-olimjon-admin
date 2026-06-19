import React from "react";
import { useIcon } from "../IconContext";

const BatteryFullIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M7 9s.5.9.5 3-.5 3-.5 3"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10.5 9s.5.9.5 3-.5 3-.5 3"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14 9s.5.9.5 3-.5 3-.5 3"/><path  stroke="currentColor"  strokeWidth="1.5" d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"  opacity=".5"/></svg>
  );
};

export default BatteryFullIcon;