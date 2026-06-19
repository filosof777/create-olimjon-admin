import React from "react";
import { useIcon } from "../IconContext";

const Planet2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/><path  stroke="currentColor" stroke-dasharray="3.5 2.5"  strokeLinecap="round"  strokeWidth="1.5" d="M17.671 6.225c2.102-.415 3.654-.268 4.158.538 1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.516-.823.163-2.178 1.672-3.69"  opacity=".5"/></svg>
  );
};

export default Planet2Icon;