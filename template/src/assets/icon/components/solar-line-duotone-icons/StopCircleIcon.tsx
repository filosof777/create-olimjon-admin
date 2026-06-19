import React from "react";
import { useIcon } from "../IconContext";

const StopCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M8 12c0-1.886 0-2.828.586-3.414S10.114 8 12 8s2.828 0 3.414.586S16 10.114 16 12s0 2.828-.586 3.414S13.886 16 12 16s-2.828 0-3.414-.586S8 13.886 8 12Z"/></svg>
  );
};

export default StopCircleIcon;