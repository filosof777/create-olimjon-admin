import React from "react";
import { useIcon } from "../IconContext";

const Code2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m16 11 1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973 0 .89-.771 1.585-2.314 2.973L16 20"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M13.987 5 10 20"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8 4.83 6.304 6.356C4.76 7.745 3.99 8.44 3.99 9.33s.771 1.585 2.314 2.973L8 13.83"/></svg>
  );
};

export default Code2Icon;