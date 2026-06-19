import React from "react";
import { useIcon } from "../IconContext";

const QuitFullScreenIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14 22c0-3.771 0-5.657 1.172-6.828S18.229 14 22 14"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 10c3.771 0 5.657 0 6.828-1.172S10 5.771 10 2"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 10c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2"  opacity=".5"/></svg>
  );
};

export default QuitFullScreenIcon;