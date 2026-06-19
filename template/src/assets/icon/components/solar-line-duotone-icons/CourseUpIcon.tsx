import React from "react";
import { useIcon } from "../IconContext";

const CourseUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m22 7-7.38 7.335c-.997.991-1.496 1.487-2.115 1.487s-1.117-.496-2.115-1.488l-.24-.238c-.997-.992-1.497-1.489-2.116-1.489s-1.118.497-2.115 1.49L2 18"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M22 12.546V7h-5.582"/></svg>
  );
};

export default CourseUpIcon;