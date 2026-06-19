import React from "react";
import { useIcon } from "../IconContext";

const FlashlightOnIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 22v-4.343c0-.818 0-1.226-.152-1.594-.152-.367-.442-.656-1.02-1.235l-3.242-3.242c-.29-.29-.434-.434-.51-.617C4 10.785 4 10.58 4 10.172V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h12c.943 0 1.414 0 1.707.293S20 9.057 20 10v.172c0 .408 0 .613-.076.797-.076.183-.22.328-.51.617l-3.242 3.242c-.578.579-.867.867-1.02 1.235-.152.368-.152.776-.152 1.594V22m0-6H9"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M4.5 11h15M12 5V2"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8 5 6 3m10 2 2-2"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 19v2"  opacity=".5"/></svg>
  );
};

export default FlashlightOnIcon;