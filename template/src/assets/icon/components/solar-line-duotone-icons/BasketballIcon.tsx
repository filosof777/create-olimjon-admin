import React from "react";
import { useIcon } from "../IconContext";

const BasketballIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M3.34 17c2.76 4.783 8.876 6.42 13.66 3.66a9.96 9.96 0 0 0 4.196-4.731 9.99 9.99 0 0 0-.536-8.93 9.99 9.99 0 0 0-7.465-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M16.95 20.573S16.01 13.983 14 10.5c-2.01-3.482-6.95-7.073-6.95-7.073m.527 17.39c1.482-4.47 8.875-9.424 14.286-8.237m-5.45-9.371C14.927 7.63 7.675 12.512 2.29 11.452"  opacity=".5"/></svg>
  );
};

export default BasketballIcon;