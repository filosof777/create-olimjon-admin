import React from "react";
import { useIcon } from "../IconContext";

const RecordCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><circle cx="12" cy="12" r="4"  stroke="currentColor"  strokeWidth="1.5"/></svg>
  );
};

export default RecordCircleIcon;