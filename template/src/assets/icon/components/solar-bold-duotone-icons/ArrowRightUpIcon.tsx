import React from "react";
import { useIcon } from "../IconContext";

const ArrowRightUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" clipRule="evenodd"/><path  fill="currentColor" d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97-1.06-1.06z"  opacity=".5"/></svg>
  );
};

export default ArrowRightUpIcon;
