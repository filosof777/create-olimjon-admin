import React from "react";
import {useIcon} from "../IconContext";

const LanguageIcon = (props: React.SVGProps<SVGSVGElement>) => {
    const {className} = useIcon();

    return (

        <svg {...props}
             className={`${className} ${props.className || ""}`} width="800" height="800" viewBox="0 0 800 800"
             fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M431.625 182.375C431.625 182.375 411.625 410 131.625 592.125" stroke="currentColor"
                      strokeWidth="50" strokeLinecap="round"/>
                <path d="M91.875 182.375H518.25" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
                <path d="M305 113.5V182.375" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
                <path d="M209.5 275.625C209.5 275.625 315 460 400 516.625" stroke="currentColor" strokeWidth="50"
                      strokeLinecap="round"/>
                <path opacity="0.5"
                      d="M419.375 686.5L553.625 374C554.493 372.021 555.919 370.338 557.728 369.156C559.537 367.974 561.652 367.345 563.813 367.345C565.973 367.345 568.088 367.974 569.897 369.156C571.706 370.338 573.132 372.021 574 374L708.125 686.5"
                      stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
                <path opacity="0.5" d="M465.625 578.75H662" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>

        </svg>


    );
};

export default LanguageIcon;