import React from "react";
import { useIcon } from "../IconContext";

const RoundTransferDiagonalIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m6.5 4 7.378 8V7.5m3.5 12.378-7.5-7.879v4.5"/></svg>
  );
};

export default RoundTransferDiagonalIcon;