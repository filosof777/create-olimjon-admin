import React from "react";
import { useIcon } from "../IconContext";

const MapPointHospitalIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="M12 2c-4.418 0-8 3.646-8 8.143 0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144 20 5.645 16.418 2 12 2m0 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clipRule="evenodd"  opacity=".5"/><path  fill="currentColor" fillRule="evenodd" d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.75-5.5a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75z" clipRule="evenodd"/></svg>
  );
};

export default MapPointHospitalIcon;
