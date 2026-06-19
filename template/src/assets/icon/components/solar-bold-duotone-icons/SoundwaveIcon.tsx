import React from "react";
import { useIcon } from "../IconContext";

const SoundwaveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-8 7a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clipRule="evenodd"/><path  fill="currentColor" d="M16.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-8 0a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0z"  opacity=".5"/></svg>
  );
};

export default SoundwaveIcon;
