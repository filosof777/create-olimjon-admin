import React from "react";
import { useIcon } from "../IconContext";

const PlateIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M15 4.001c3.114.01 4.765.108 5.828 1.17C22 6.344 22 8.23 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828C4.235 4.109 5.886 4.01 9 4"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 5V3m-4 7.5h8M8 14h5.5"/></svg>
  );
};

export default PlateIcon;