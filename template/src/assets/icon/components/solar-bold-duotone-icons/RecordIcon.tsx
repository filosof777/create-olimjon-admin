import React from "react";
import { useIcon } from "../IconContext";

const RecordIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="7"  fill="currentColor"  opacity=".5"/><path  fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14" clipRule="evenodd"/></svg>
  );
};

export default RecordIcon;
