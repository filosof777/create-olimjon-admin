import React from "react";
import { useIcon } from "../IconContext";

const TextItalicIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M9 1h12a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2m-.744 20H3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z" clipRule="evenodd"/><path  fill="currentColor" d="m13.656 3-5.4 18h2.088l5.4-18z"  opacity=".5"/></svg>
  );
};

export default TextItalicIcon;
