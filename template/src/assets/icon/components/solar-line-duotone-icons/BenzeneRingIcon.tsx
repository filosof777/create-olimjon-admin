import React from "react";
import { useIcon } from "../IconContext";

const BenzeneRingIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M9.98 4.88C10.965 4.292 11.458 4 12 4s1.034.293 2.02.88l2.96 1.758c.985.586 1.479.88 1.75 1.362s.27 1.069.27 2.241v3.518c0 1.172 0 1.758-.27 2.241-.271.483-.765.776-1.75 1.362l-2.96 1.759c-.985.586-1.479.879-2.02.879s-1.034-.293-2.02-.88l-2.96-1.758c-.985-.586-1.479-.88-1.75-1.362S5 14.931 5 13.759V10.24C5 9.07 5 8.483 5.27 8c.271-.483.765-.776 1.75-1.362z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M5 8 2 6m17 2 3-2M5 16l-3 2"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m12 16.884 4-2.384"  opacity=".5"/></svg>
  );
};

export default BenzeneRingIcon;