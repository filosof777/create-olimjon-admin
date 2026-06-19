import { Modal, ModalProps } from "antd";
import { CloseCircleIcon } from "../../assets/icon/components/solar-bold-duotone-icons";
import React from "react";

interface Props extends ModalProps {
  title?: React.ReactNode;
  header?: React.ReactNode;
  extraIcon?: any;
  hasDownload?: boolean;
  customRender?: boolean;
}

const Index = (props: Props) => {
  const {
    header,
    onClose,
    onCancel,
    title,
    children,
    extraIcon,
    customRender = true
  } = props;
  return (
    <Modal
      {...props}
      centered={true}
      destroyOnClose={true}
      rootClassName={`[&_.tdc-modal-mask]:backdrop-blur-[1.5px] [&_.tdc-modal-mask]:!bg-[#00000050]  [&_.tdc-modal]:!pointer-events-auto !relative !z-[100] ${props.rootClassName}`}
      footer={false}
      closeIcon={<CloseCircleIcon />}
      modalRender={
        customRender
          ? () => (
              <div className="dark:bg-[#1F2A3D] bg-white rounded-2xl  relative z-10 tdc-modal-wrapper xs:my-5 ">
                <div className="p-5 bg-[#1e50e7] rounded-t-2xl tdc-modal-head">
                  <div className={`flex gap-5 justify-between`}>
                    <span className={"text-white md:text-lg lg:text-xl"}>
                      {title}
                    </span>
                    <div className="flex gap-5">
                      {extraIcon ? extraIcon : ""}
                      <CloseCircleIcon
                        className="text-white cursor-pointer w-7 h-7 min-w-7 min-h-7 hover:text-gray-300 transition-colors"
                        // @ts-ignore
                        onClick={onClose || onCancel}
                      />
                    </div>
                  </div>
                  {header ? (
                    <span className={"text-white block"}>{header}</span>
                  ) : null}
                </div>
                <div className="p-5">{children}</div>
              </div>
            )
          : undefined
      }
    />
  );
};

export default Index;
