import React from "react";
import { useIcon } from "../IconContext";

const LightbulbBoltIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M4.5 9.5a7.5 7.5 0 1 1 12.501 5.59c-1.12 1.003-1.68 1.505-1.832 1.69-.487.601-.508.65-.63 1.413-.039.237-.039.593-.039 1.307 0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75 0-.713 0-1.07-.038-1.307-.123-.763-.144-.812-.631-1.412-.151-.186-.712-.688-1.832-1.692A7.48 7.48 0 0 1 4.5 9.5Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M14.5 19.5h-5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m12.786 8.5-2.143 3h3l-2.143 3"  opacity=".5"/></svg>
  );
};

export default LightbulbBoltIcon;