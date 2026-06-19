import React from "react";
import { useIcon } from "../IconContext";

const UserPlusRoundedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="6" r="4"  stroke="currentColor"  strokeWidth="1.5"/><circle cx="17" cy="18" r="4"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M17 16.667v2.666M15.667 18h2.666"/><path  stroke="currentColor"  strokeWidth="1.5" d="M14 20.834c-.634.108-1.305.166-2 .166-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936"  opacity=".5"/></svg>
  );
};

export default UserPlusRoundedIcon;