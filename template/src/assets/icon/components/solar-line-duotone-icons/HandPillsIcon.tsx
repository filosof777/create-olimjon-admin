import React from "react";
import { useIcon } from "../IconContext";

const HandPillsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M8.796 6.64a2.718 2.718 0 1 1 3.845-3.844l2.563 2.563a2.719 2.719 0 0 1-3.845 3.845z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M14 4s-.225 1.168-1.529 2.471S10 8 10 8"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727.696-.337 1.549-.81 2.122-1.341.572-.53 1.168-1.397 1.59-2.075.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0-.11.012m.11-.012a1 1 0 0 0 .427-.24 1.49 1.49 0 0 0 .126-2.134 1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"  opacity=".5"/></svg>
  );
};

export default HandPillsIcon;