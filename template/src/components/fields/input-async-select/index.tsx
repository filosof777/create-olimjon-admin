import { get } from "lodash";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";
import { api, helpers, queryBuilder } from "../../../services";
import { GroupBase, StylesConfig } from "react-select";
import { FieldProps } from "formik";
import { useTranslation } from "react-i18next";
import { Input, Typography } from "antd";
import React, { useEffect, useRef, useState } from "react";
import CurrencyInput from "react-currency-input-field"; // Add these imports

interface AsyncSelectProps<T> extends FieldProps {
  url: string;
  height: string;
  optionName: string;
  loadOptionsParams: any;
  loadOptionsKey?: string | ((data: any) => T[]);
  onChange?: (value: T | null) => void;
  extraOptions?: T[];
  decimalsLimit?: number;
  isSearchable?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
  placeholder?: string;
  optionLabel: keyof T | ((option: T) => string);
  optionValue: keyof T | ((option: T) => string);
  label?: string;
  className?: string;
  required?: boolean;
  validate?: any;
  options?: T[];
  isMulti?: boolean;
  noOptionsMessage?: any;
  menuPlacement?: "auto" | "bottom" | "top"; // Keep this prop
}

const CustomAntdInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>((props, ref: any) => <Input {...props} ref={ref} />);
CustomAntdInput.displayName = "CustomAntdInput";

const AsyncSelect = <T extends Record<string, any>>(
  props: AsyncSelectProps<T>
) => {
  const theme = "light";
  const { t } = useTranslation();
  const {
    url,
    optionName = "",
    height = "38px",
    loadOptionsParams = () => {},
    loadOptionsKey = "data",
    onChange = () => {},
    extraOptions = [],
    isSearchable = true,
    isClearable = false,
    disabled=false,
    required = true,
    placeholder = "Tanlang...",
    optionLabel,
    optionValue,
    decimalsLimit = 0,
    label,
    className = "",
    options = [],
    isMulti = false,
    menuPlacement: propMenuPlacement = "auto",
    noOptionsMessage = () => t("Hech nima topilmadi"),
    field: { name, value },
    form: { errors, setFieldValue, setFieldTouched, touched, values }
  } = props;

  const [dynamicMenuPlacement, setDynamicMenuPlacement] = useState<
    "top" | "bottom" | "auto"
  >(propMenuPlacement);
  const errorValue = helpers.getNestedValue(errors, name);
  const touchedError = helpers.getNestedValue(touched, name);
  const optionErrorValue = helpers.getNestedValue(errors, optionName);
  const optionTouchedError = helpers.getNestedValue(touched, optionName);
  const selectRef = useRef<HTMLDivElement>(null);

  // Function to calculate the optimal menu placement
  const calculateMenuPlacement = () => {
    if (!selectRef.current) return;

    const rect = selectRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const spaceBelow = windowHeight - rect.bottom;
    const spaceAbove = rect.top;
    const estimatedMenuHeight = 400;

    if (spaceBelow >= estimatedMenuHeight || spaceBelow > spaceAbove) {
      setDynamicMenuPlacement("bottom");
    } else {
      setDynamicMenuPlacement("top");
    }
  };

  useEffect(() => {
    if (propMenuPlacement === "auto") {
      calculateMenuPlacement();

      window.addEventListener("resize", calculateMenuPlacement);
      window.addEventListener("scroll", calculateMenuPlacement);

      return () => {
        window.removeEventListener("resize", calculateMenuPlacement);
        window.removeEventListener("scroll", calculateMenuPlacement);
      };
    }
  }, [propMenuPlacement]);

  const loadOptions: LoadOptions<T, any, any> = async (
    searchQuery,
    _,
    { page }
  ) => {
    try {
      const { data } = await api.get(
        queryBuilder(url, {
          page,
          ...loadOptionsParams(searchQuery)
        })
      );

      const newOptions: T[] = loadOptionsKey
        ? typeof loadOptionsKey === "function"
          ? [...extraOptions, ...loadOptionsKey(data)]
          : [...extraOptions, ...get(data, loadOptionsKey, [])]
        : get(data, "data", []);
      return {
        options: newOptions,
        hasMore: get(data, "current_page", 1) < get(data, "last_page", 1),
        additional: { page: get(data, "current_page", 1) + 1 }
      };
    } catch {
      return {
        options: [],
        hasMore: false,
        additional: { page }
      };
    }
  };

  const customStyles: StylesConfig<T, boolean, GroupBase<T>> = {
    container: base => ({
      ...base,
      width: "100%",
      height: "100%"
    }),
    control: (base, { isFocused }) => ({
      ...base,
      height: height,
      minHeight: "100%",
      minWidth: 100,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: "0 8px 8px 0 ",
      backgroundColor: disabled ? "#0000000a" : "#fff",
      borderColor:
        optionTouchedError && optionErrorValue
          ? "red"
          : isFocused
          ? "#1e50e7"
          : theme === "light"
          ? "#d9d9d9"
          : "#303030",
      boxShadow:
        optionTouchedError && optionErrorValue
          ? "none"
          : isFocused
          ? "0 0 0 2px rgba(5, 145, 255, 0.1)"
          : "none",
      "&:hover": {
        borderColor: "#1668dc"
      }
    }),
    placeholder: base => ({
      ...base,
      color: "#ccc",
      fontWeight: 300,
      fontFamily: "GT Walsheim Pro !important",
      fontSize: 16,
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": "1"
    }),
    singleValue: base => ({
      ...base,
      fontWeight: 400,
      color: theme === "light" ? "#000000" : "#ffffff"
    }),
    option: (base, { isSelected }) => ({
      ...base,
      fontWeight: 400,
      color:
        theme === "light" && isSelected
          ? "#ffffff"
          : theme === "light"
          ? "#000000"
          : "#ffffff",
      backgroundColor: isSelected ? "rgb(32,107,255)" : "transparent",
      borderRadius: 4,
      "&:hover": {
        backgroundColor: isSelected
          ? "rgb(32,107,255)"
          : theme === "light"
          ? "rgb(215,230,255)"
          : "#181818"
      }
    }),
    menu: base => ({
      ...base,
      padding: 4,
      zIndex: 10,
      backgroundColor: theme === "light" ? "#ffffff" : "#373737"
    }),
    menuList: base => ({
      ...base,
      overflowY: "scroll",
      borderRadius: 4
    }),
    menuPortal: base => ({
      ...base,
      zIndex: 9999
    }),
    multiValue: base => ({
      ...base,
      backgroundColor:
        theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255,255,255,0.12)",
      height: 30,
      display: "flex",
      alignItems: "center",
      borderRadius: 4,
      color: theme === "light" ? "#000000" : "#ffffff",
      svg: {
        width: 16,
        height: 16,
        fontWeight: 100,
        color: theme === "light" ? "#000000" : "#ffffff"
      },
      "*": {
        fontSize: 14,
        color: theme === "light" ? "#000000" : "#ffffff"
      }
    }),

  };

  return (
    <div className={`w-full ${className} `} ref={selectRef}>
      {label ? (
        <Typography.Text>
          {t(label)}
          {required ? (
            <span className={"text-red-500 font-bold"}>*</span>
          ) : null}
        </Typography.Text>
      ) : null}
       <div className={'flex w-full'}>
         <div className="w-2/3">
           <CurrencyInput
             id="price-input"
             decimalsLimit={decimalsLimit}
             disabled={disabled}
             decimalSeparator="."
             className={"!rounded-r-none"}
             groupSeparator=" "
             allowNegativeValue={false}
             value={value}
             status={errorValue && touchedError ? "error" : ""}
             name={name}
             // @ts-ignore
             size={"large"}
             onBlur={() => {
               setFieldTouched(name, true);
             }}
             customInput={CustomAntdInput}
             onValueChange={value => {
               setFieldTouched(name, true);
               setFieldValue(name, value);
             }}
             placeholder={t("Kiriting")}
           />
         </div>
         <div className="">
           <AsyncPaginate
             id={optionName}
             key={get(values, `${optionName}.id`)}
             name={optionName}
             loadOptions={loadOptions}
             debounceTimeout={100}
             styles={customStyles}
             menuPortalTarget={document.body}
             value={get(values, optionName)}
             onBlur={() => setFieldTouched(optionName, true)}
             getOptionLabel={(option: any) => {
               return typeof optionLabel === "function"
                 ? optionLabel(option)
                 : (option[optionLabel] as string);
             }
             }
             getOptionValue={(option: any) =>
               typeof optionValue === "function"
                 ? optionValue(option)
                 : (option[optionValue] as string)
             }
             onChange={(option: any) => {
               setFieldValue(optionName, option);
               onChange(option);
               if (!option || (isMulti && !option.length)) {
                 setFieldTouched(optionName, true);
                 setFieldValue(optionName, "");
               }
             }}
             onMenuOpen={calculateMenuPlacement}
             noOptionsMessage={noOptionsMessage}
             isSearchable={isSearchable}
             isClearable={isClearable}
             loadingMessage={() => t("Yuklanmoqda...")}
             isDisabled={disabled}
             placeholder={t(placeholder)}
             additional={{ page: 1 }}
             isMulti={isMulti}
             options={options}
             menuPlacement={dynamicMenuPlacement} // Use dynamic menu placement
           />
         </div>
       </div>
      {/*{optionError && optionValue ? (*/}
      {/*  <Typography.Text strong className={"!text-xs"} type="danger">*/}
      {/*    {errorValue}*/}
      {/*  </Typography.Text>*/}
      {/*) : null}*/}
    </div>
  );
};

export default AsyncSelect;
