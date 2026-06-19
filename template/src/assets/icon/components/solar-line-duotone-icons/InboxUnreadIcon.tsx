import React from "react";
import { useIcon } from "../IconContext";

const InboxUnreadIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14 2.005Q13.079 2 12 2C7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12q.001-1.079-.005-2"/><circle cx="19" cy="5" r="3"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"  opacity=".5"/></svg>
  );
};

export default InboxUnreadIcon;