import React from "react";
import { useIcon } from "../IconContext";

const Widget3Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M22.25 6.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0m-11 11a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0" clipRule="evenodd"/><path  fill="currentColor" fillRule="evenodd" d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m11 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0" clipRule="evenodd"  opacity=".5"/></svg>
  );
};

export default Widget3Icon;
