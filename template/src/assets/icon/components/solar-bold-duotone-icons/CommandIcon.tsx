import React from "react";
import { useIcon } from "../IconContext";

const CommandIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M16 16h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3"/><path  fill="currentColor" fillRule="evenodd" d="M19 8h-3V5a3 3 0 1 1 3 3M8 8V5a3 3 0 1 0-3 3z" clipRule="evenodd"/><path  fill="currentColor" d="M16 8H8v8h8z"  opacity=".5"/></svg>
  );
};

export default CommandIcon;
