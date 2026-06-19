import React from "react";
import { useIcon } from "../IconContext";

const Reply2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m9.5 17-5-5 5-5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M4.5 12h10c1.667 0 5-1 5-5"  opacity=".5"/></svg>
  );
};

export default Reply2Icon;