import React from "react";
import { useIcon } from "../IconContext";

const IncomingCallRoundedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m19 5-4 4m0 0V6m0 3h3"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z"  opacity=".5"/></svg>
  );
};

export default IncomingCallRoundedIcon;