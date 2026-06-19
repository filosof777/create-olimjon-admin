import React from "react";
import { useIcon } from "../IconContext";

const GlassesIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="18" cy="16" r="4"  stroke="currentColor"  strokeWidth="1.5"/><circle cx="6" cy="16" r="4"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m14 16.214-.656-.234a4 4 0 0 0-2.688 0l-.656.234M2 16l.763-8.395c.115-1.264.173-1.896.543-2.363s.972-.668 2.176-1.07L6 4m16 12-.763-8.395c-.115-1.264-.172-1.896-.542-2.363s-.973-.668-2.177-1.07L18 4"  opacity=".5"/></svg>
  );
};

export default GlassesIcon;