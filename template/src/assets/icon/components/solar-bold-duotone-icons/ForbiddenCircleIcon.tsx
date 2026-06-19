import React from "react";
import { useIcon } from "../IconContext";

const ForbiddenCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0 3.905-10.237 0-14.142-10.237-3.905-14.142 0"  opacity=".5"/><path  fill="currentColor" d="M18.521 4.418 4.418 18.521a10 10 0 0 0 1.06 1.061L19.583 5.479a10 10 0 0 0-1.06-1.06"/></svg>
  );
};

export default ForbiddenCircleIcon;