import React from "react";
import { useIcon } from "../IconContext";

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="6"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 2v1m0 18v1m10-10h-1M3 12H2"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m19.07 4.93-.392.393M5.322 18.678l-.393.393m14.141-.001-.392-.393M5.322 5.322l-.393-.393"  opacity=".5"/></svg>
  );
};

export default SunIcon;