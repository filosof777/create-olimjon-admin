import React from "react";
import { useIcon } from "../IconContext";

const IphoneIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M15 19H9m7.748-16.622-.084.126c-.756 1.134-1.134 1.701-1.686 2.044a3 3 0 0 1-.342.183c-.592.27-1.273.27-2.636.27s-2.045 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126"  opacity=".5"/></svg>
  );
};

export default IphoneIcon;