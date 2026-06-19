import React from "react";
import { useIcon } from "../IconContext";

const BombEmojiIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="9.5" cy="14.5" r="7.5"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 16h2"  opacity=".5"/><path  fill="currentColor" d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5"  opacity=".5"/><ellipse cx="9" cy="12.5" fill="#1C274C" opacity=".5" rx="1" ry="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m17 7-2 2"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"/></svg>
  );
};

export default BombEmojiIcon;