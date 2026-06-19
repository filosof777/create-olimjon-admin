import React from "react";
import { useIcon } from "../IconContext";

const Mirror1Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M4.35 17A9.25 9.25 0 0 1 3 12.168C3 7.105 7.03 3 12 3s9 4.105 9 9.168A9.25 9.25 0 0 1 19.65 17"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M5.636 22h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22Z"/></svg>
  );
};

export default Mirror1Icon;