import React from "react";
import { useIcon } from "../IconContext";

const TeaCupIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M2.315 12.698c-.05-.427-.075-.641-.064-.817a2 2 0 0 1 1.646-1.85c.174-.031.389-.031.82-.031h10.567c.43 0 .645 0 .819.03a2 2 0 0 1 1.646 1.85c.01.177-.014.39-.064.818l-.401 3.428A5.515 5.515 0 0 1 11.807 21H8.193a5.515 5.515 0 0 1-5.477-4.874z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M17 17h2a3 3 0 1 0 0-6h-1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M10 2a1.414 1.414 0 0 0 0 2 1.414 1.414 0 0 1 0 2"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m5 7.5.116-.116c.507-.507.564-1.31.134-1.884a1.44 1.44 0 0 1 .134-1.884L5.5 3.5m9 4 .116-.116c.507-.507.564-1.31.134-1.884a1.44 1.44 0 0 1 .134-1.884L15 3.5"/></svg>
  );
};

export default TeaCupIcon;