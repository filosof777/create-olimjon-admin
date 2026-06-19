import React from "react";
import { useIcon } from "../IconContext";

const TransmissionSquareIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8 9v6m4-6v6m-4-3h5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C16 10.398 16 9.932 16 9"/><rect width="20" height="20" x="2" y="2"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5" rx="5"/></svg>
  );
};

export default TransmissionSquareIcon;