import React from "react";
import { useIcon } from "../IconContext";

const PlaylistMinimalistic3Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M20 4H3m5 10H3m9-5H3"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M16 17.429C16 18.849 14.88 20 13.5 20S11 18.849 11 17.429s1.12-2.572 2.5-2.572S16 16.008 16 17.43Zm0 0V11"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m18.675 8.116-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356c-.061.166-.061.355-.061.734 0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.373a1 1 0 0 0 .223-.356C21 10.149 21 9.958 21 9.58c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51Z"/></svg>
  );
};

export default PlaylistMinimalistic3Icon;