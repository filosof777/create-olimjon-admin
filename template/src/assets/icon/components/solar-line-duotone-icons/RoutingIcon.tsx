import React from "react";
import { useIcon } from "../IconContext";

const RoutingIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M8 4.25a.75.75 0 0 0 0 1.5zm12 14H7.5v1.5H20zm-12.5-5.5h9v-1.5h-9zm9-8.5H8v1.5h8.5zm4.25 4.25a4.25 4.25 0 0 0-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75zm-4.25 4.25a4.25 4.25 0 0 0 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75zM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m18 17 2 2-2 2"/><circle cx="6" cy="5" r="2"  stroke="currentColor"  strokeWidth="1.5"/></svg>
  );
};

export default RoutingIcon;