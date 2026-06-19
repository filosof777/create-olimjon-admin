import React from "react";
import { useIcon } from "../IconContext";

const PanoramaIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M22 5.86c0-.795-.79-1.526-2.117-2.107-1.175-.515-2.383.467-2.383 1.749v3.217M22 5.86v12.717C22 20.467 17.523 22 12 22S2 20.467 2 18.576V5.86m20 0c0 1.195-1.789 2.247-4.5 2.86M2 5.86c0-.795.79-1.526 2.117-2.107C5.292 3.238 6.5 4.22 6.5 5.502v3.217M2 5.86c0 1.196 1.789 2.248 4.5 2.86m0 0c1.578.357 3.468.564 5.5.564s3.922-.207 5.5-.564"/><path  stroke="currentColor"  strokeWidth="1.5" d="M19.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m21 20-2.496-2.149a2.405 2.405 0 0 0-2.889-.166l-.23.155a1.6 1.6 0 0 1-1.986-.164l-3.32-3.177a1.84 1.84 0 0 0-2.433-.078L6.29 15.557 2.5 19.104"  opacity=".5"/></svg>
  );
};

export default PanoramaIcon;