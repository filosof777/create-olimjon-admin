import React from "react";
import { useIcon } from "../IconContext";

const RunningRoundIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="18.5" cy="4.5" r="2.5"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14.4 22v-.959a7 7 0 0 0-2.837-5.554c-.04-.03-.06-.045-.075-.058a2 2 0 0 1-.136-3.022l.07-.064 1.04-.946c1.628-1.479 1.133-4.153-.916-4.95a2.96 2.96 0 0 0-2.271.05l-.522.23c-.54.237-.809.356-1.072.487q-.658.327-1.275.725c-.247.16-.487.33-.967.672L4 9.636"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m9 17-.26.311A7.47 7.47 0 0 1 3 20m13-8a8.25 8.25 0 0 0 4 0"  opacity=".5"/></svg>
  );
};

export default RunningRoundIcon;