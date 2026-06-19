import React from "react";
import { useIcon } from "../IconContext";

const MirrorLeftIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M12 3h-1C7.229 3 5.343 3 4.172 4.172S3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828S7.229 21 11 21h1"/><path  stroke="currentColor" stroke-dasharray="2.5 3"  strokeLinecap="round"  strokeWidth="1.5" d="M11 3h4c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v6c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21h-4"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 2v20"/></svg>
  );
};

export default MirrorLeftIcon;