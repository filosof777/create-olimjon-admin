import React from "react";
import { useIcon } from "../IconContext";

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m17 7.83 1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974 0 .89-.771 1.585-2.314 2.973L17 16.83"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m13.987 5-3.974 14.83"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M7 7.83 5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33s.771 1.585 2.314 2.973L7 16.83"/></svg>
  );
};

export default CodeIcon;