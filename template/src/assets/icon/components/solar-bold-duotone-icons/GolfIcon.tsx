import React from "react";
import { useIcon } from "../IconContext";

const GolfIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><ellipse cx="12" cy="18.5" fill="#1C274C" opacity=".5" rx="10" ry="3.5"/><path  fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v1.036l5.008 2.504.054.027c.734.367 1.36.68 1.796.984.442.309.906.757.906 1.449s-.464 1.14-.906 1.449c-.436.304-1.062.617-1.796.984l-5.062 2.53V18a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"/></svg>
  );
};

export default GolfIcon;