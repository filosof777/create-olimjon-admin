import React from "react";
import { Layout } from "antd";

const Panel = ({
  children,
  className = "",
  ref
}: {
  children: React.ReactNode;
  className?: string;
  ref?: any;
}) => {
  return (
    <Layout
      rootClassName={`dark:!bg-[#141B29] rounded-xl p-4 fade-item !bg-white ${className}`}
      ref={ref}
    >
      {children}
    </Layout>
  );
};

export default Panel;
