import { Spin, SpinProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Index = (props: SpinProps) => {
  return <Spin {...props} indicator={<LoadingOutlined spin />} />;
};

export default Index;
