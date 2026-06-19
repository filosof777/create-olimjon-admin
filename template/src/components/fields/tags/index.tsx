import { FieldProps } from "formik";
import { Button } from "../../index.tsx";
import { get } from "lodash";
import { Input, InputProps, Tag } from "antd";
import { helpers } from "../../../services";
import { useState } from "react";

interface Props extends FieldProps {
  label?: string;
  type?: string;
  antdProps?: any;
  tagName?: string;
  disabled?: boolean;
  onChange?: any;
  color?: string;
}

const Index = (props: InputProps & Props) => {
  const {
    onChange = () => {},
    tagName,
    form: { setFieldValue, setFieldTouched, errors, touched, values },
    field: { name },
    label,
    disabled,
    color,
    size = "large",
    placeholder,
    antdProps
  } = props;

  const [inputValue, setInputValue] = useState("");
  const errorValue = helpers.getNestedValue(errors, name);
  const touchedError = helpers.getNestedValue(touched, name);
  const tagsFieldName = tagName || name;

  const handleAddTag = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      const currentTags = get(values, tagsFieldName, []);
      if (!currentTags.includes(trimmedValue)) {
        setFieldValue(tagsFieldName, [...currentTags, trimmedValue]);
        setFieldTouched(tagsFieldName, true);
        if (onChange) {
          onChange([...currentTags, trimmedValue]);
        }
      }
      setInputValue("");
    }
  };

  const handleRemoveTag = (indexToRemove: number) => {
    const currentTags = get(values, tagsFieldName, []);
    const updatedTags = currentTags.filter(
      (_: any, index: number) => index !== indexToRemove
    );
    setFieldValue(tagsFieldName, updatedTags);
    setFieldTouched(tagsFieldName, true);
    if (onChange) {
      onChange(updatedTags);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="flex w-full items-start gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Qiymat kiriting va + tugmasini bosing"}
          size={size}
          disabled={disabled}
          status={errorValue && touchedError ? "error" : undefined}
          {...antdProps}
        />
        <Button
          size={size}
          htmlType="button"
          type="primary"
          onClick={handleAddTag}
          disabled={disabled}
        >
          +
        </Button>
      </div>

      {errorValue && touchedError && (
        <div className="mt-1 text-sm text-red-600">{errorValue}</div>
      )}

      {get(values, tagsFieldName, []).length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {get(values, tagsFieldName, []).map((item: any, index: number) => (
            <Tag
              key={index}
              closable={!disabled}
              onClose={() => handleRemoveTag(index)}
              color={color}
            >
              {item}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
