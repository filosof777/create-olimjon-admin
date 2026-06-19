import React, {useMemo, useState} from "react";
import {TreeSelect,  Empty} from "antd";
import type {FieldProps} from "formik";
import {useGet} from "../../../hooks";
import {get} from "lodash";
import Spin from "../../spin";

type LabelGetter = keyof any | ((option: any) => string);
type ValueGetter = keyof any | ((option: any) => string | number);

interface Props extends FieldProps {
  url: string;
  loadOptionsParams?: (search: string) => any; // mas: (search)=>({extra:{search},limit:50})
  onChange?: (value: any | null, option?: any) => void;
  disabled?: boolean;
  placeholder?: string;
  open: boolean
  optionLabel: LabelGetter;
  optionValue: ValueGetter;
  label?: string;
  className?: string;
  options?: any[]; // statik variant uchun
  filterItems?: (items: any[]) => any[]; // ixtiyoriy transform
  idKey?: string;       // default: "id"
  parentKey?: string;   // default: "parent_id"
}

const getVal = (getter: LabelGetter | ValueGetter, item: any) =>
  typeof getter === "function" ? getter(item) : item?.[getter as string];

function buildTree(
  items: any[],
  parentKey = "parent_id",
  getTitle: (x: any) => string,
  getValue: (x: any) => string | number
) {
  const byId: Record<string | number, any> = {};
  const roots: any[] = [];

  // node tayyorlab qo'yamiz
  for (const it of items) {
    const node = {
      ...it,
      key: getValue(it),
      value: String(getValue(it)),
      title: getTitle(it),
      children: [],
      disabled: it.disabled ?? false,
      selectable: it.selectable ?? true,
    };
    byId[node.key] = node;
  }

  for (const it of items) {
    const id = getValue(it);
    const pid = it?.[parentKey];
    const node = byId[id];
    if (pid == null || pid === 0 || byId[pid] == null) {
      roots.push(node);
    } else {
      byId[pid].children.push(node);
    }
  }
  return roots;
}

const TreeAsyncSelect: React.FC<Props> = ({
                                            url,
                                            loadOptionsParams = () => ({}),
                                            onChange = () => {
                                            },
                                            open = false,
                                            placeholder = "Tanlang...",
                                            disabled = false,
                                            optionLabel,
                                            optionValue,
                                            className = "",
                                            options = [],
                                            filterItems = () => {
                                            },
                                            idKey = "id",
                                            parentKey = "parent_id",
                                            field: {name, value},
                                            form: {setFieldValue, setFieldTouched}
                                          }) => {
  const [search, setSearch] = useState("");

  // useGet sizlarda odatda params o'zgarsa qayta fetch qiladi — shuni hisobga oldik
  const {data, isLoading} = useGet({
    url,
    name,
    params: loadOptionsParams?.(search) || {},
    queryOptions: {
      enabled: open
    }
  });

  const rawItems = useMemo(() => {
    if (!isLoading) {

      const merged = options.length ? options : get(data, 'data', []);
      return filterItems ? filterItems(merged) : merged;
    }
  }, [data, options, filterItems, isLoading]);

  const treeData = useMemo(() => {
    if (!rawItems?.length) return [];
    return buildTree(
      rawItems,
      parentKey,
      (x) => String(getVal(optionLabel, x) ?? ""),
      (x) => getVal(optionValue, x) as string | number
    );
  }, [rawItems, idKey, parentKey, optionLabel, optionValue]);

  const handleChange = (newValue: string, option: any) => {
    setFieldValue(name, option);
    setFieldTouched(name, true, false);
    onChange?.(newValue, option);
  };

  return (
    <TreeSelect
      className={className}
      style={{width: "100%"}}
      size="large"

      value={value ? get(value, optionLabel as string) : undefined}
      treeData={treeData}
      placeholder={placeholder}
      treeDefaultExpandAll
      onSelect={handleChange}
      allowClear
      showSearch
      treeNodeFilterProp="title"
      onSearch={setSearch}
      disabled={disabled}
      // popup uchun to'g'ri API
      dropdownStyle={{maxHeight: 400, overflow: "auto"}}
      // z-index/overflow muammolarga qarshi
      getPopupContainer={(trigger) => trigger?.parentElement || document.body}
      // yuklanayotganda "Loading..." ko'rsatish
      notFoundContent={isLoading ? <Spin size="small"/> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
    />
  );
};

export default TreeAsyncSelect;
