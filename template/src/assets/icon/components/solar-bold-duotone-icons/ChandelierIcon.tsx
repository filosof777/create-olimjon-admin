import React from "react";
import { useIcon } from "../IconContext";

const ChandelierIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M11.25 4.75V16.5a2.75 2.75 0 1 1-5.5 0v-.594h-1.5v.594A4.25 4.25 0 0 0 12 18.912a4.25 4.25 0 0 0 7.75-2.412v-.594h-1.5v.594a2.75 2.75 0 1 1-5.5 0V4.75z" clipRule="evenodd"  opacity=".5"/><path  fill="currentColor" d="M9 3.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM16 13c0 1.398.956 2.573 2.25 2.906h1.5A3 3 0 0 0 22 13v-1.8a1.2 1.2 0 0 0-1.2-1.2h-3.6a1.2 1.2 0 0 0-1.2 1.2zM2 13c0 1.398.956 2.573 2.25 2.906h1.5A3 3 0 0 0 8 13v-2.143A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857z"/></svg>
  );
};

export default ChandelierIcon;
