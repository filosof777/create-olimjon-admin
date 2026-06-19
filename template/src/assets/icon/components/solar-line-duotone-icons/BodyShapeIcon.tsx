import React from "react";
import { useIcon } from "../IconContext";

const BodyShapeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32.66 1.193 1.517 2.38 2.146 3.863.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M6 13h12M6 11h12"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 22c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"/></svg>
  );
};

export default BodyShapeIcon;