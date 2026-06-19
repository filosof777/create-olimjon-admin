import React from "react";
import { useIcon } from "../IconContext";

const SortFromBottomToTopIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M17 20.75a.75.75 0 0 0 .75-.75V6.25l1.65 2.2a.75.75 0 1 0 1.2-.9l-3-4a.75.75 0 0 0-1.35.45v16c0 .414.336.75.75.75" clipRule="evenodd"/><path  fill="currentColor" d="M3.25 8c0 .414.336.75.75.75h9a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0-.75.75"/><path  fill="currentColor" d="M5.25 13c0 .414.336.75.75.75h7a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0-.75.75"  opacity=".7"/><path  fill="currentColor" d="M7.25 18c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0-.75.75"  opacity=".4"/></svg>
  );
};

export default SortFromBottomToTopIcon;
