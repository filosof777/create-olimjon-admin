import React from "react";
import { useIcon } from "../IconContext";

const HashtagIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M10.2 2.277a.75.75 0 0 1 .523.924l-5 18a.75.75 0 0 1-1.445-.402l5-18a.75.75 0 0 1 .923-.522m8.999 0a.75.75 0 0 1 .523.924l-5 18a.75.75 0 1 1-1.445-.402l5-18a.75.75 0 0 1 .923-.522" clipRule="evenodd"/><path  fill="currentColor" fillRule="evenodd" d="M3.25 9A.75.75 0 0 1 4 8.25h18a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 9m-2 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clipRule="evenodd"  opacity=".5"/></svg>
  );
};

export default HashtagIcon;
