import React from "react";
import { useIcon } from "../IconContext";

const CompassIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465 2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"/></svg>
  );
};

export default CompassIcon;