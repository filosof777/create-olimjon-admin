import React from "react";
import { useIcon } from "../IconContext";

const PaperclipRounded2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m12.95 11.009-2.94 2.926a4.125 4.125 0 0 0 0 5.853 4.17 4.17 0 0 0 5.88 0l3.675-3.658a8.25 8.25 0 0 0 0-11.706c-3.248-3.232-8.512-3.232-11.76 0L4.132 8.082a7.22 7.22 0 0 0 0 10.243"/></svg>
  );
};

export default PaperclipRounded2Icon;