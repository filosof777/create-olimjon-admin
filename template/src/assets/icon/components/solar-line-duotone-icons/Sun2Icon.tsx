import React from "react";
import { useIcon } from "../IconContext";

const Sun2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="5"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m20 0h-2"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m19.778 4.223-2.222 2.031M4.222 4.223l2.222 2.031m0 11.302-2.222 2.222m15.556-.001-2.222-2.222"  opacity=".5"/></svg>
  );
};

export default Sun2Icon;