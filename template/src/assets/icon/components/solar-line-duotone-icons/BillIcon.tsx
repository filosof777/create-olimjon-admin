import React from "react";
import { useIcon } from "../IconContext";

const BillIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M17.625 21a1.693 1.693 0 0 1 2.25 0A.676.676 0 0 0 21 20.495V3.505A.676.676 0 0 0 19.875 3c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0A.676.676 0 0 0 3 3.505v16.99c0 .583.69.893 1.125.505a1.693 1.693 0 0 1 2.25 0c.642.57 1.608.57 2.25 0a1.693 1.693 0 0 1 2.25 0c.642.57 1.608.57 2.25 0a1.693 1.693 0 0 1 2.25 0c.642.57 1.608.57 2.25 0Z"  opacity=".4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M7.5 15.5h9m-9-3.5h9m-9-3.5h9"/></svg>
  );
};

export default BillIcon;