import React from "react";
import { useIcon } from "../IconContext";

const Reel2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 22h10"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"  opacity=".5"/><path  fill="currentColor" d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
  );
};

export default Reel2Icon;