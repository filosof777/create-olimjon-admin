import React from "react";
import { useIcon } from "../IconContext";

const ArrowLeftUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M6.53 15.53A.75.75 0 0 1 5.25 15V6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 .53 1.28z" clipRule="evenodd"/><path  fill="currentColor" d="M18.53 17.47a.75.75 0 1 1-1.06 1.06l-6.97-6.97 1.06-1.06z"  opacity=".5"/></svg>
  );
};

export default ArrowLeftUpIcon;
