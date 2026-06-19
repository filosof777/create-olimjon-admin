import React from "react";
import { useIcon } from "../IconContext";

const MinimizeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M2.393 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v5.857a.75.75 0 1 1-1.5 0v-4.046l-5.72 5.72a.75.75 0 0 1-1.06-1.061l5.72-5.72H3.142a.75.75 0 0 1-.75-.75" clipRule="evenodd"  opacity=".6"/><path  fill="currentColor" fillRule="evenodd" d="M21.607 9a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V3.143a.75.75 0 0 1 1.5 0v4.046l5.72-5.72a.75.75 0 1 1 1.06 1.061l-5.72 5.72h4.047a.75.75 0 0 1 .75.75" clipRule="evenodd"/></svg>
  );
};

export default MinimizeIcon;
