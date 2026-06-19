import React from "react";
import { useIcon } from "../IconContext";

const SoundwaveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 4v16"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M16 7v10M8 7v10"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M20 11v2M4 11v2"/></svg>
  );
};

export default SoundwaveIcon;