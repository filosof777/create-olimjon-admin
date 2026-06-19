import React from "react";
import { useIcon } from "../IconContext";

const UserRoundedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="6" r="4"  fill="currentColor"/><ellipse cx="12" cy="17" fill="#1C274C" opacity=".5" rx="7" ry="4"/></svg>
  );
};

export default UserRoundedIcon;