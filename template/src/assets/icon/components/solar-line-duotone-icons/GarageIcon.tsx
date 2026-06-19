import React from "react";
import { useIcon } from "../IconContext";

const GarageIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 22H2m1 0V11.347a3 3 0 0 1 1.007-2.242l6-5.333a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V22M10 9h4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 15.5h6m-6 3h6"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M18 22v-6c0-1.886 0-2.828-.586-3.414S15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586S6 14.114 6 16v6"  opacity=".5"/></svg>
  );
};

export default GarageIcon;