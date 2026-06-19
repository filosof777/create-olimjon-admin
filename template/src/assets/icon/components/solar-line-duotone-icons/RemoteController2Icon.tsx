import React from "react";
import { useIcon } from "../IconContext";

const RemoteController2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M15 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path  fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><circle cx="10" cy="6" r="1"  fill="currentColor"/><path  fill="currentColor" d="M15 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><circle cx="14" cy="6" r="1"  fill="currentColor"/></svg>
  );
};

export default RemoteController2Icon;