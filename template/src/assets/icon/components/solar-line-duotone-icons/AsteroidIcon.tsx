import React from "react";
import { useIcon } from "../IconContext";

const AsteroidIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M12 2C6.477 2 2 6.477 2 12q0 .668.085 1.312a10.01 10.01 0 0 0 7.298 8.342A10 10 0 0 0 12 22c4.879 0 8.941-3.494 9.823-8.116q.175-.917.177-1.884a9.98 9.98 0 0 0-3.682-7.752A9.96 9.96 0 0 0 12 2Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M2.085 13.312a6 6 0 0 1 7.297 8.342m12.441-7.769a6.002 6.002 0 0 1-3.505-9.637"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M16 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>
  );
};

export default AsteroidIcon;