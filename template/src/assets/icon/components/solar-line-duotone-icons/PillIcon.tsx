import React from "react";
import { useIcon } from "../IconContext";

const PillIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M16.806 7.194s-.541 2.806-3.674 5.939-5.938 3.673-5.938 3.673"  opacity=".5"/></svg>
  );
};

export default PillIcon;