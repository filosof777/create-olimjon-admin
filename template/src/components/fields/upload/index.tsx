import { message, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { api, helpers, useStore } from "../../../services";
import { get } from "lodash";
import "./index.css";
import React from "react";
import { InboxInIcon } from "../../../assets/icon/components/solar-line-duotone-icons";
import { TrashBinTrashIcon } from "../../../assets/icon/components/solar-bold-duotone-icons";
import Spin from "../../spin";

const Upload = (props: any) => {
  const { theme } = useStore();
  const {
    form: { setFieldValue, errors, touched },
    field,
    type = "private",
    multiple = false,
    accept = "",
    onSuccess = () => {},
    onDelete = () => {},
    label = "Yuklash "
  } = props;
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = React.useState(false);
  const errorValue = helpers.getNestedValue(errors, field.name);
  const touchedError = helpers.getNestedValue(touched, field.name);
  const name = get(field, "name");
  const value = multiple ? get(field, "value", []) : get(field, "value", null);
  const upload = (files: any) => {
    setIsLoading(true);
    const formData = new FormData();
    Array.from(files).forEach((file: any, index: number) => {
      formData.append(`files[${index}]`, file);
    });
    formData.append(`type`, type);

    api({
      method: "post",
      url: "/files",
      data:formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        message.success(t("Fayllar muvaffaqiyatli yuklandi"));
        setIsLoading(false);
        if (multiple) {
          const newFiles = get(response, "data.data", []);
          setFieldValue(name, [...value, ...newFiles]);
        } else {
          const newFiles = get(response, "data.data", []);
          setFieldValue(name, { ...value, ...newFiles[0] });
        }
        onSuccess(get(response, "data.data", []));
      })
      .catch(error => {
        message.error(t("Fayllarni yuklashda xatolik yuz berdi"));
        setIsLoading(false);
        console.error("Upload error:", error);
      });
  };
  const onDeleteFile = (index?: number | null) => {
    if (multiple) {
      const newValue = value.filter((_: any, i: number) => i !== index);
      setFieldValue(name, newValue);
    } else {
      setFieldValue(name, null);
    }
  };
  return (
    <>
      {isLoading ? <Spin spinning={isLoading}></Spin> : null}
      {(!multiple && !value) || multiple ? (
        <div
          className={`relative h-40 rounded-2xl border ${
            errorValue && touchedError
              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
              : theme === "light"
              ? "border-[#d9d9d9] bg-[#f4f7fb]"
              : "border-[#303030] bg-[#1f1f1f]"
          } border-dashed hover:border-[#1668dc] cursor-pointer flex flex-col justify-center items-center`}
        >
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={e => upload(e.target.files)}
            className={
              "opacity-0 w-full h-full absolute top-0 left-0 z-10 cursor-pointer z-10"
            }
          />
          <div className={"flex flex-col justify-center items-center gap-5"}>
            <InboxInIcon className={"w-12 h-12 !text-[#1668dc]"} />
            <Typography.Title level={5} className={"text-center opacity-70"}>
              {t(label)}
            </Typography.Title>
          </div>
        </div>
      ) : null}
      {multiple && value.length ? (
        <div className={"grid gap-3 sm:grid-cols-2 xl:grid-cols-3 mt-5"}>
          {value.map((file: any, index: number) => {
            return (
              <div
                key={index}
                className={`${
                  theme === "light" ? "bg-[#00000010]" : "bg-[#ffffff15]"
                } py-2 px-3 rounded-xl flex gap-2 items-center overflow-hidden relative group h-max`}
              >
                <div
                  className={`w-10 h-12 min-w-10 rounded-xl p-1.5 ${
                    theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
                  }`}
                >
                  <div
                    className={
                      "w-full h-full rounded text-white flex justify-center items-center text-xs"
                    }
                    style={{
                      backgroundColor: helpers.getFile(file).color
                    }}
                  >
                    {helpers.getFile(file).extension}
                  </div>
                </div>
                <div>
                  <a
                    href={get(file, "src")}
                    download={true}
                    target={"_blank"}
                    className={"line-clamp-1 font-medium"}
                  >
                    {get(file, "name")}
                  </a>
                  <p className={"text-[10px] opacity-60"}>
                    {helpers.getFile(file).byte}
                  </p>
                </div>
                <TrashBinTrashIcon
                  onClick={() => {
                    onDeleteFile(index);
                    onDelete(file);
                  }}
                  className={`min-w-8 !w-8 !h-8 absolute text-red-600 right-3 top-1/2 -translate-y-1/2 cursor-pointer scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 rounded-full transition-all p-1 hover:!shadow-xl ${
                    theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
                  }`}
                />
              </div>
            );
          })}
        </div>
      ) : null}
      {!multiple && value ? (
        <div
          className={`${
            theme === "light" ? "bg-[#00000010]" : "bg-[#ffffff15]"
          } py-2 px-3 rounded-xl flex gap-2 items-center overflow-hidden relative group h-max`}
        >
          <div
            className={`w-10 h-12 min-w-10 rounded-xl p-1.5 ${
              theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
            }`}
          >
            <div
              className={
                "w-full h-full rounded text-white flex justify-center items-center text-xs"
              }
              style={{
                backgroundColor: helpers.getFile(value).color
              }}
            >
              {helpers.getFile(value).extension}
            </div>
          </div>
          <div>
            <a
              href={get(value, "src")}
              download={true}
              target={"_blank"}
              className={"line-clamp-1 font-medium"}
            >
              {get(value, "name")}
            </a>
            <p className={"text-[10px] opacity-60"}>
              {helpers.getFile(value).byte}
            </p>
          </div>
          <TrashBinTrashIcon
            onClick={() => onDeleteFile()}
            className={`min-w-8 !w-8 !h-8 absolute text-red-600 right-3 top-1/2 -translate-y-1/2 cursor-pointer scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 rounded-full transition-all p-1 hover:!shadow-xl ${
              theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
            }`}
          />
        </div>
      ) : null}
    </>
  );
};

export default Upload;
