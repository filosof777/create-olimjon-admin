import React from "react";
import { useIcon } from "../IconContext";

const Rewind10SecondsForwardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09"/><path  fill="currentColor" fillRule="evenodd" d="M14.25 7.75a2.5 2.5 0 0 0-2.5 2.5v3.5a2.5 2.5 0 0 0 5 0v-3.5a2.5 2.5 0 0 0-2.5-2.5m0 1.5a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1" clipRule="evenodd"/><path  fill="currentColor" fillRule="evenodd" d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794" clipRule="evenodd"  opacity=".5"/></svg>
  );
};

export default Rewind10SecondsForwardIcon;
