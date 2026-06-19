import React from "react";
import { useIcon } from "../IconContext";

const UsersGroupRoundedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="15" cy="6" r="3"  fill="currentColor"  opacity=".4"/><ellipse cx="16" cy="17" fill="#1C274C" opacity=".4" rx="5" ry="3"/><circle cx="9.001" cy="6" r="4"  fill="currentColor"/><ellipse cx="9.001" cy="17.001" fill="#1C274C" rx="7" ry="4"/></svg>
  );
};

export default UsersGroupRoundedIcon;