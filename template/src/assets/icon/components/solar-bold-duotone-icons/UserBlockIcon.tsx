import React from "react";
import { useIcon } from "../IconContext";

const UserBlockIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/><path  fill="currentColor" fillRule="evenodd" d="M16.5 15.75a2.75 2.75 0 0 0-2.383 4.123l3.756-3.756a2.74 2.74 0 0 0-1.373-.367m2.42 1.442-3.728 3.728a2.75 2.75 0 0 0 3.728-3.728M12.25 18.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0" clipRule="evenodd"/><path  fill="currentColor" d="M17.996 14.521a4.25 4.25 0 0 0-3.979 7.429Q13.107 22 12 22c-8 0-8-2.015-8-4.5S7.582 13 12 13c2.387 0 4.53.588 5.996 1.521"  opacity=".4"/></svg>
  );
};

export default UserBlockIcon;
