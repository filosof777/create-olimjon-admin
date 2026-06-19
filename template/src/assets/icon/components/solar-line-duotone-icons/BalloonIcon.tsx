import React from "react";
import { useIcon } from "../IconContext";

const BalloonIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M11.94 17.5c4.141.033 7.593-3.797 7.56-7.94-.034-4.14-3.42-7.525-7.56-7.56A7.355 7.355 0 0 0 4.5 9.44c.034 4.142 3.297 8.027 7.44 8.06Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M15.5 9a3.035 3.035 0 0 0-3-3M12 19.85c.321 0 .482 0 .593-.022.654-.128 1.051-.772.858-1.39-.033-.105-.109-.242-.261-.515M12 19.85c-.321 0-.482 0-.593-.022-.654-.128-1.051-.772-.858-1.39.033-.105.109-.242.261-.515M12 19.85V22"  opacity=".5"/></svg>
  );
};

export default BalloonIcon;