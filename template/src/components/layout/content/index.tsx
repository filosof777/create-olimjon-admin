import React from "react";
import { useStore } from "../../../services";

const Content = ({ children }: { children: React.ReactNode }) => {
  const { sidebar } = useStore();
  return (
    <div className={"w-full h-full pr-3 pb-3"}>
      <div
        className={
          " bg-[#f4f7fb] dark:bg-[#1F2A3D] w-full h-full rounded-2xl p-3 xl:p-5 overflow-y-scroll no-scrollbar max-h-[calc(100vh_-_90px)]"
        }
      >
        <div
          className={`${
            sidebar
              ? " olimjon-content"
              : "!w-full"
          } mx-auto transition-all`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Content;
