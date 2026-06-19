import React from "react";
import { useIcon } from "../IconContext";

const PodcastIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M13 10h2m-2 3h2m-6-3h1m-1 3h1"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 1 1 12 0v4.154c0 1.02.826 1.846 1.846 1.846"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 16v3"  opacity=".5"/></svg>
  );
};

export default PodcastIcon;