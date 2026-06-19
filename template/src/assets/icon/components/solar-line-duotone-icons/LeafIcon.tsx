import React from "react";
import { useIcon } from "../IconContext";

const LeafIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="m12 9 4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M12 22c4.418 0 8-3.646 8-8.143 0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143 0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2"/></svg>
  );
};

export default LeafIcon;