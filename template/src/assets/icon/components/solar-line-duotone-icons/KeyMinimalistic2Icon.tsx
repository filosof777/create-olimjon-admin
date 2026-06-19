import React from "react";
import { useIcon } from "../IconContext";

const KeyMinimalistic2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="15" cy="9" r="7"  stroke="currentColor"  strokeWidth="1.5"/><circle cx="15" cy="9" r="2"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19"/></svg>
  );
};

export default KeyMinimalistic2Icon;