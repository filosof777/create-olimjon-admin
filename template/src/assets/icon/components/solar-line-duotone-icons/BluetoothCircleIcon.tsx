import React from "react";
import { useIcon } from "../IconContext";

const BluetoothCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m11 12 3.2-2.407c.533-.401.8-.602.8-.875 0-.274-.267-.475-.8-.876l-1.454-1.094c-.762-.573-1.143-.86-1.444-.708C11 6.191 11 6.669 11 7.623zm0 0v4.377c0 .954 0 1.432.302 1.583.301.151.682-.135 1.444-.708l1.454-1.094c.533-.402.8-.602.8-.876 0-.273-.267-.474-.8-.875zm0 0L8 9.5m3 2.5-3 2.5"  opacity=".5"/><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"/></svg>
  );
};

export default BluetoothCircleIcon;