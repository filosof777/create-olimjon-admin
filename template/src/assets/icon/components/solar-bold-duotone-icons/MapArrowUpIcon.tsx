import React from "react";
import { useIcon } from "../IconContext";

const MapArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975z"/><path  fill="currentColor" d="M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65z"  opacity=".5"/></svg>
  );
};

export default MapArrowUpIcon;