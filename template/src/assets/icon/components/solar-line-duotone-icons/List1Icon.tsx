import React from "react";
import { useIcon } from "../IconContext";

const List1Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M20 7H4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M15 12H4"  opacity=".7"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 17H4"  opacity=".4"/></svg>
  );
};

export default List1Icon;