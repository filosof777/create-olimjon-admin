import React from "react";
import { useIcon } from "../IconContext";

const LadleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 5.684a3.684 3.684 0 0 1 7.368 0V15"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0v-1.052M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.632-.988-6.632-2.368M22 14.5c0-1.38-2.946-2.5-6-2.5s-6.632 1.25-6.632 2.632"/></svg>
  );
};

export default LadleIcon;