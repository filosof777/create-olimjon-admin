import { notification as antNotification, NotificationArgsProps } from "antd";
import { CloseCircleIcon } from "../../assets/icon/components/solar-bold-duotone-icons";

const notification = (props: NotificationArgsProps) => {
  const { type = "success" } = props;
  const getBgColor = (type: string) => {
    switch (type) {
      case "success":
        return "#52c41a";
      case "info":
        return "#1890ff";
      case "warning":
        return "#faad14";
      case "error":
        return "#ff4d4f";
      default:
        return "#52c41a";
    }
  };
  return antNotification[type]({
    showProgress: true,
    placement: "topRight",
    closable:false,
    closeIcon: <CloseCircleIcon className={"text-white"} />,
    pauseOnHover: true,
    className:
      "[&_.ant-notification-notice-icon_svg]:fill-white [&_.ant-notification-notice-message]:!text-white [&_.ant-notification-notice-description]:!text-white ",
    style: {
      backgroundColor: getBgColor(type),
      borderRadius: 8,
      overflow: "hidden"
    },
    ...props
  });
};

export default notification;
