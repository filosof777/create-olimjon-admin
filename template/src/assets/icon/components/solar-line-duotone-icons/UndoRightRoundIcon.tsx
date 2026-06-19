import React from "react";
import { useIcon } from "../IconContext";

const UndoRightRoundIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m17 4 3 3-3 3"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M20 7H9a5 5 0 1 0 0 10h7"  opacity=".5"/></svg>
  );
};

export default UndoRightRoundIcon;