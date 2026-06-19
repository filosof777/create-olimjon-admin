import React from "react";
import { useIcon } from "../IconContext";

const LaptopMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h6c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v5c0 1.886 0 2.828-.586 3.414S18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586S3 15.886 3 14z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 21H2m13-6H9"  opacity=".5"/></svg>
  );
};

export default LaptopMinimalisticIcon;