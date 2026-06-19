import React, { useEffect } from "react";
import { ConfigProvider, theme as antTheme } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/uz-latn";
import "dayjs/locale/ru";
import "dayjs/locale/en";
import uzUZ from "antd/es/locale/uz_UZ";
import ruRU from "antd/es/locale/ru_RU";
import enUS from "antd/es/locale/en_US";
import { useStore } from "../../services";

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  const { language, theme } = useStore();

  const getLocale = () => {
    switch (language) {
      case "uz":
      case "oz":
        return { antd: uzUZ, dayjs: "uz-latn" };
      case "ru":
        return { antd: ruRU, dayjs: "ru" };
      case "en":
        return { antd: enUS, dayjs: "en" };
      default:
        return { antd: enUS, dayjs: "en" };
    }
  };

  // Update dayjs locale when language changes
  useEffect(() => {
    const { dayjs: dayjsLocale } = getLocale();
    dayjs.locale(dayjsLocale);
  }, [language]);

  const { antd: antdLocale } = getLocale();

  return (
    <ConfigProvider
      locale={antdLocale}
      prefixCls="tdc"
      theme={{
        algorithm: theme === 'light' ? antTheme.defaultAlgorithm : antTheme.darkAlgorithm
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
