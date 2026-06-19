import React from "react";
import {Button, Image, message} from "antd";
import {get} from "lodash";
import {CameraIcon} from "../../../assets/icon/components/solar-line-duotone-icons";
import {api} from "../../../services";
import {useTranslation} from "react-i18next";
import Spin from "../../spin";

function Index(props: any) {
  const { t } = useTranslation();
  const {
    type = "private",
    form: { setFieldValue },
    field: { name, value }
  } = props;
  const [isLoadingUpload, setIsLoading] = React.useState(false);

  const onChange = (e: any, setFieldValue: any) => {
    const files = e.target.files;

    setIsLoading(true);
    const formData = new FormData();
    Array.from(files).forEach((file: any, index: number) => {
      formData.append(`files[${index}]`, file);
    });
    formData.append(`type`, type);

    api({
      method: "post",
      url: "/files",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        message.success(t("Fayllar muvaffaqiyatli yuklandi"));
        setIsLoading(false);
        const newFiles = get(response, "data.data", []);
        setFieldValue(name, newFiles[0]);
      })
      .catch(error => {
        message.error(t("Fayllarni yuklashda xatolik yuz berdi"));
        setIsLoading(false);
        console.error("Upload error:", error);
      });
  };

  const hasImage = value && get(value, "src", "");

  return (
    <>
      <div className="w-40 h-40 min-w-40 rounded-lg overflow-hidden flex items-center justify-center relative bg-[#f4f7fb] dark:bg-gray-900 shadow">
        <Spin spinning={isLoadingUpload}>
          {hasImage ? (
            <Image
              preview={get(value, "src", "")}
              className={
                "dark:bg-[#1F2A3D] bg-[#f4f7fb] object-cover w-40 h-40 min-w-40"
              }
              src={get(value, "src", "")}
              alt=""
            />
          ) : (
            <div className="w-40 h-40 flex items-center justify-center">
              <CameraIcon className={"text-gray-400 w-12 h-12"} />
            </div>
          )}
        </Spin>
        <Button
          type={"primary"}
          htmlType={"button"}
          className="mt-2 !absolute w-max !bottom-2 w-full h-full cursor-pointer !z-20"
        >
          <input
            type="file"
            accept={"image/*"}
            onChange={e => {
              onChange(e, setFieldValue);
            }}
            className={
              "absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            }
          />
          <CameraIcon className={"text-white"} />
          {hasImage ? t("O'zgartirish") : t("Yuklash")}
        </Button>
      </div>

    </>
  );
}

export default Index;
