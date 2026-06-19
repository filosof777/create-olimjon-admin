import React from "react";
import { useIcon } from "../IconContext";

const UserHandUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m20 21.5-.65-5.52C19.15 14.28 17.71 13 16 13H8c-3 0-4.933-2.731-5.618-5.472L2 6"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8 13v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-5"  opacity=".5"/><circle cx="12" cy="6" r="4"  stroke="currentColor"  strokeWidth="1.5"  opacity=".9"/></svg>
  );
};

export default UserHandUpIcon;