import React from "react";
import { useIcon } from "../IconContext";

const Home1Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" fillRule="evenodd" d="m21.532 11.586-.782-.626v10.29H22a.75.75 0 0 1 0 1.5H2a.75.75 0 1 1 0-1.5h1.25V10.96l-.781.626a.75.75 0 1 1-.937-1.172l8.125-6.5a3.75 3.75 0 0 1 4.686 0l8.125 6.5a.75.75 0 1 1-.936 1.172M12 6.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m1.746 6.562c-.459-.062-1.032-.062-1.697-.062h-.098c-.665 0-1.238 0-1.697.062-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v4.299h7.5v-4.423c0-.612-.004-1.143-.062-1.573-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597" clipRule="evenodd"/><g fill="#1C274C" fillRule="evenodd" clipRule="evenodd" opacity=".5"><path d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/><path d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/></g><path  fill="currentColor" d="M12.05 13.25c.664 0 1.237 0 1.696.062.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-7.5v-4.3c0-.664 0-1.237.062-1.696.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062zM16 3h2.5a.5.5 0 0 1 .5.5v4.14l-3.5-2.8V3.5A.5.5 0 0 1 16 3"  opacity=".5"/></svg>
  );
};

export default Home1Icon;
