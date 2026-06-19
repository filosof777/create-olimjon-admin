import React from "react";
import { useIcon } from "../IconContext";

const NotebookIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8 2.5V22M2 12h2m-2 4h2M2 8h2"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M11.5 6.5h5m-5 3.5h5"/></svg>
  );
};

export default NotebookIcon;