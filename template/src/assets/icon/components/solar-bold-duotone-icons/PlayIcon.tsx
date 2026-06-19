import React from "react";
import { useIcon } from "../IconContext";

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M23 12c0-1.035-.53-2.07-1.591-2.647L8.597 2.385C6.534 1.264 4 2.724 4 5.033V12z" clipRule="evenodd"/><path  fill="currentColor" d="m8.597 21.615 12.812-6.968A2.99 2.99 0 0 0 23 12H4v6.967c0 2.31 2.534 3.769 4.597 2.648"  opacity=".5"/></svg>
  );
};

export default PlayIcon;
