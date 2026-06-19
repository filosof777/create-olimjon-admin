import { get } from "lodash";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";
import {api, helpers, queryBuilder, useStore} from "../../../services";
import { GroupBase, StylesConfig } from "react-select";
import { FieldProps } from "formik";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";

interface AsyncSelectProps<T> extends FieldProps {
  url: string;
  loadOptionsParams: any;
  loadOptionsKey?: string | ((data: any) => T[]);
  onChange?: (value: T | null) => void;
  extraOptions?: T[];
  isSearchable?: boolean;
  closeMenuOnSelect?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  disabled?: boolean;
  placeholder?: string;
  optionLabel: keyof T | ((option: T) => string);
  optionValue: keyof T | ((option: T) => string);
  label?: string;
  className?: string;
  options?: T[];
  isMulti?: boolean;
  menuPlacement?: "auto" | "bottom" | "top";
}

const AsyncSelect = <T extends Record<string, any>>({
  url,
  loadOptionsParams = () => {},
  loadOptionsKey = "data",
  onChange = () => {},
  extraOptions = [],
  isSearchable = true,
  isClearable = true,
  isDisabled = false,
  closeMenuOnSelect = true,
  placeholder = "Tanlang...",
  disabled = false,
  optionLabel,
  optionValue,
  label,
  className = "",
  options = [],
  isMulti = false,
  menuPlacement,
  field: { name, value },
  form: { errors, setFieldValue, setFieldTouched, touched, values }
}: AsyncSelectProps<T>) => {
  const {theme} = useStore();
  const disabledField = disabled || isDisabled;
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
        hasMore: get(data, "meta.current_page", 1) < get(data, "meta.last_page", 1),
        additional: { page: get(data, "meta.current_page", 1) + 1 }
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        options: [],
        hasMore: false,
        additional: { page }
      };
    }
  };

  const errorValue = helpers.getNestedValue(errors, name);
  const touchedError = helpers.getNestedValue(touched, name);
  const { t } = useTranslation();

  const customStyles: StylesConfig<T, boolean, GroupBase<T>> = {
    container: base => ({
      ...base,
      width: "100%"
    }),

    control: (base, { isFocused }) => ({
      ...base,
      height: isMulti ? 'auto' : "40px",
      minHeight: "100%",
      minWidth: 100,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      backgroundColor: disabledField
        ? theme === "light" ? "#0000000a" : "#ffffff0a"
        : theme === "light" ? "#fff" : "#141414",
      borderColor:
        touchedError && errorValue
          ? "red"
          : isFocused
          ? "#1e50e7"
          : theme === "light"
          ? "#d9d9d9"
          : "#303030",
      boxShadow:
        touchedError && errorValue
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
      fontWeight: 400,
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
    input: base => ({
      ...base,
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
      zIndex: 10000,
      overflow: "hidden",
      backgroundColor: theme === "light" ? "#ffffff" : "#373737",
      "@media(min-width: 768px)": {
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": "1"
      }
    }),

    menuList: base => ({
      ...base,
      overflowY: "scroll",
      borderRadius: 4,
      "::-webkit-scrollbar": {
        display: "none"
      }
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
      color: theme === "light" ? "#000000 !important" : "#ffffff !important",
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
    })
  };

  return (
    <div className={`w-full ${className}`}>
      {label ? <Typography.Text>{t(label)}</Typography.Text> : null}
      <AsyncPaginate
        id={name}
        key={get(values, `${name}.id`)}
        name={name}
        loadOptions={loadOptions}
        debounceTimeout={100}
        styles={customStyles}
        value={value}
        onBlur={() => setFieldTouched(name, true)}
        getOptionLabel={(option: any) =>
          typeof optionLabel === "function"
            ? optionLabel(option)
            : (option[optionLabel] as string)
        }
        getOptionValue={(option: any) =>
          typeof optionValue === "function"
            ? optionValue(option)
            : (option[optionValue] as string)
        }
        onChange={(option: any) => {
          setFieldValue(name, option);
          onChange(option);
          if (!option || (isMulti && !option.length)) {
            setFieldTouched(name, true);
            setFieldValue(name, "");
          }
        }}
        noOptionsMessage={() => t("Hech nima topilmadi")}
        isSearchable={isSearchable}
        closeMenuOnSelect={closeMenuOnSelect}
        isClearable={isClearable}
        isDisabled={disabledField}
        placeholder={t(placeholder)}
        additional={{ page: 1 }}
        isMulti={isMulti}
        options={options}
        menuPlacement={menuPlacement}
      />
      {/*{errorValue && touchedError ? (*/}
      {/*  <Typography.Text strong className={"!text-xs"} type="danger">*/}
      {/*    {errorValue}*/}
      {/*  </Typography.Text>*/}
      {/*) : null}*/}
    </div>
  );
};

export default AsyncSelect;
