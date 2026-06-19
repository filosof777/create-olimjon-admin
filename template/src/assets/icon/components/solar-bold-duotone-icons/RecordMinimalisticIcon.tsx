import React from "react";
import { useIcon } from "../IconContext";

const RecordMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-12 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/><path  fill="currentColor" d="M6 16h12a4 4 0 0 1-2.646-1H8.646c-.705.622-1.632 1-2.646 1"  opacity=".5"/></svg>
  );
};

export default RecordMinimalisticIcon;