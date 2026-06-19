import React from "react";
import { useIcon } from "../IconContext";

const LinkMinimalistic2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m14.163 18.488-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m9.837 14.163 4.326-4.326"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m9.837 5.512.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"  opacity=".5"/></svg>
  );
};

export default LinkMinimalistic2Icon;