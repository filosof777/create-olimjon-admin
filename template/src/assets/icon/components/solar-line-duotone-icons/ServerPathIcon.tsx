import React from "react";
import { useIcon } from "../IconContext";

const ServerPathIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 19h-8M2 19h8m2-2v-3"  opacity=".5"/><circle cx="12" cy="19" r="2"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M2 11a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Zm0-6a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M13 5h6m-6 6h6"  opacity=".5"/><circle cx="6" cy="5" r="1"  fill="currentColor"  opacity=".5"/><circle cx="6" cy="11" r="1"  fill="currentColor"  opacity=".5"/></svg>
  );
};

export default ServerPathIcon;