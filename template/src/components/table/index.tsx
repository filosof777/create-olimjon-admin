import {
  Empty,
  message,
  Popconfirm,
  Switch,
  Table as AntTable,
  TableColumnsType,
  TableColumnType,
  TableProps,
  Tag,
  Tooltip
} from "antd";
import { useTranslation } from "react-i18next";
import {
  EyeIcon,
  Pen2Icon,
  TrashBinTrashIcon
} from "../../assets/icon/components/solar-bold-duotone-icons";
import { get } from "lodash";
import { usePost } from "../../hooks";
import { useQueryClient } from "@tanstack/react-query";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { SortVerticalIcon } from "../../assets/icon/components/solar-line-duotone-icons";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  "data-row-key": string;
  "data-row-item"?: any;
  "data-can-drag"?: boolean;
}

const Row = ({ children, ...props }: RowProps) => {
  const canDrag = props["data-can-drag"] !== false;
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: props["data-row-key"],
    disabled: !canDrag
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: "relative", zIndex: 9999 } : {})
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, child => {
        if ((child as React.ReactElement).key === "sortable") {
          return React.cloneElement(child as React.ReactElement, {
            children: canDrag ? (
              <div ref={setActivatorNodeRef}>
                <SortVerticalIcon
                  style={{ touchAction: "none", cursor: "move" }}
                  {...listeners}
                />
              </div>
            ) : null
          });
        }
        return child;
      })}
    </tr>
  );
};

type ColumnTypeWithSwitch<T> = TableColumnType<T> & {
  type?: "switch";
  children?: TableColumnType[];
};

interface Props extends TableProps<any> {
  items: any[];
  url?: string;
  name?: string;
  columns: ColumnTypeWithSwitch<any>[];
  isLoading: boolean;
  hasDelete?: boolean | ((item: any) => boolean);
  hasView?: boolean | ((item: any) => boolean);
  hasEdit?: boolean | ((item: any) => boolean);
  hasDrag?: boolean | ((item: any) => boolean);
  actionData?: any;
  hasSwitch?: boolean | ((item: any) => boolean);
  deleteAction?: (item: any) => void;
  viewAction?: (item: any) => void;
  editAction?: (item: any) => void;
  dragAction?: (ids: number[]) => void;
}

const Table = (props: Props) => {
  const {
    url,
    items,
    name = "",
    isLoading,
    hasDelete = false,
    hasView = false,
    hasEdit = false,
    hasDrag = false,
    hasSwitch = true,
    actionData = () => {},
    deleteAction = () => {},
    viewAction = () => {},
    editAction = () => {},
    columns,
    ...antTableProps
  } = props;

  const { t } = useTranslation();
  const { mutate, isLoading: isLoadingAction } = usePost();
  const queryClient = useQueryClient();

  // Helper function to evaluate boolean or function props
  const shouldShow = (
    prop: boolean | ((item: any) => boolean),
    item: any
  ): boolean => {
    if (typeof prop === "function") {
      return prop(item);
    }
    return prop;
  };

  const sortAction = (items: any) => {
    return items.map((i: any, index: any) => ({
      ...i,
      key: i.id || i.key || Math.random().toString(),
      sortOrder: index + 1
    }));
  };

  const [dataSource, setDataSource] = React.useState(sortAction(items));

  const dragAction = (ids: number[]) => {
    mutate(
      {
        url: `${url}/sort`,
        method: "put",
        data: {
          ids
        }
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [name] });
        },
        onError: () => {
          queryClient.invalidateQueries({ queryKey: [name] });
          setDataSource(sortAction(items));
        }
      }
    );
  };

  React.useEffect(() => {
    setDataSource(sortAction(items));
  }, [items]);

  const onDragEnd = ({ active, over }: any) => {
    if (active.id !== over?.id) {
      setDataSource((previous: any) => {
        const activeIndex = previous.findIndex((i: any) => i.key === active.id);
        const overIndex = previous.findIndex((i: any) => i.key === over?.id);
        const updatedDataSource = arrayMove(
          previous,
          activeIndex,
          overIndex
        ).map((item: any, index) => ({
          ...item,
          sortOrder: index + 1 // Update sort order after drag
        }));
        const updatedItems = updatedDataSource.map(item => item.key);
        dragAction(updatedItems);
        return updatedDataSource;
      });
    }
  };

  const onChange = (value: any, row: any, itemName: string) => {
    mutate(
      {
        url: `${url}/${row.id}`,
        method: "put",
        data: {
          [itemName]: value ? 1 : 0
        }
      },
      {
        onSuccess: () => {
          message.success(t("Saqlandi"));
          queryClient.invalidateQueries({ queryKey: [name] });
        },
        onError: error => {
          const errorData = get(
            error,
            "response.data.errorMessage",
            "Xatolik yuz berdi"
          );
          message.error(t(errorData));
        }
      }
    );
  };

  const onDelete = (row: any) => {
    mutate(
      {
        url: `${url}/${get(row, "id")}`,
        method: "delete",
        data: null
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [name] });
        }
      }
    );
  };

  // Check if drag should be enabled for the table
  const isDragEnabled = React.useMemo(() => {
    if (typeof hasDrag === "boolean") {
      return hasDrag;
    }
    // If hasDrag is a function, check if any item has drag enabled
    return dataSource.some((item: any) => shouldShow(hasDrag, item));
  }, [hasDrag, dataSource]);

  const processedColumns: TableColumnsType<any> = columns.map(col => {
    if (get(col, "type") === "switch") {
      return {
        ...col,
        render: (value: any, row: any) =>
          shouldShow(hasSwitch, row) ? (
            <Switch
              defaultChecked={value}
              loading={isLoadingAction}
              onChange={v => onChange(v, row, col.dataIndex as string)}
            />
          ) : (
            <Tag color={value ? "green" : "red"}>
              {t(value ? "Faol" : "Faol emas")}
            </Tag>
          )
      };
    }
    return col;
  });

  const sortableColumn: TableColumnsType<any> = isDragEnabled
    ? [
        {
          title: <SortVerticalIcon />,
          key: "sortable",
          className: "w-[50px]",
          render: () => null // Placeholder for drag handle
        }
      ]
    : [];

  const actionColumn: TableColumnsType<any> =
    hasDelete || hasView || hasEdit || actionData
      ? [
          {
            title: t("Amallar"),
            dataIndex: "actions",
            key: "actions",
            className: "w-[100px]",
            render: (_: any, item: any) => (
              <div className="flex justify-center gap-4 items-center">
                {actionData(item)}
                {shouldShow(hasView, item) && (
                  <Tooltip title={t("Ko'rish")}>
                    <div
                      className="cursor-pointer text-sky-500"
                      onClick={e => {
                        e.stopPropagation();
                        viewAction(item);
                      }}
                    >
                      <EyeIcon className="!text-blue-500 !w-5 !h-5" />
                    </div>
                  </Tooltip>
                )}
                {shouldShow(hasEdit, item) && (
                  <Tooltip title={t("Tahrirlash")}>
                    <div
                      className="cursor-pointer text-sky-500"
                      onClick={e => {
                        e.stopPropagation();
                        editAction(item);
                      }}
                    >
                      <Pen2Icon className="!text-gray-500 !w-5 !h-5" />
                    </div>
                  </Tooltip>
                )}
                {shouldShow(hasDelete, item) && (
                  <Tooltip title={t("O'chirish")}>
                    <Popconfirm
                      rootClassName="[&_.tdc-popconfirm-buttons]:justify-end"
                      title={t("Haqiqatdan ham o'chirmoqchimisiz?")}
                      onConfirm={() => {
                        deleteAction(item);
                        onDelete(item);
                      }}
                      placement="topRight"
                      okText={t("Ha")}
                      cancelText={t("Yo'q")}
                      okButtonProps={{ htmlType: "button" }}
                      cancelButtonProps={{ htmlType: "button" }}
                    >
                      <div className="cursor-pointer text-sky-500">
                        <TrashBinTrashIcon className="!text-red-500 !w-5 !h-5" />
                      </div>
                    </Popconfirm>
                  </Tooltip>
                )}
              </div>
            )
          }
        ]
      : [];

  const tableContent = (
    <>
      <AntTable
        bordered
        {...antTableProps}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={t(
                "Sizning so'rovingiz bo'yicha hech qanday ma'lumot topilmadi"
              )}
            />
          )
        }}
        rootClassName="[&_.tdc-spin-nested-loading]:overflow-auto"
        rowKey="key"
        pagination={false}
        loading={isLoading || isLoadingAction}
        dataSource={dataSource}
        columns={[
          ...sortableColumn,
          ...processedColumns,
          ...[
            ...(isDragEnabled
              ? [
                  {
                    title: t("T/R"),
                    key: "sort",
                    dataIndex: "sort",
                    className: "w-[50px] text-center",
                    render: (sortOrder: number) => sortOrder
                  }
                ]
              : []),
            ...actionColumn
          ]
        ]}
        onRow={(record, index) => {
          const userOnRow = antTableProps.onRow?.(record, index) || {};
          return {
            ...userOnRow,
            "data-row-item": record,
            "data-can-drag": shouldShow(hasDrag, record)
          } as any;
        }}
        components={isDragEnabled ? { body: { row: Row } } : undefined}
      />
    </>
  );

  return isDragEnabled ? (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        items={dataSource.map((i: any) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        {tableContent}
      </SortableContext>
    </DndContext>
  ) : (
    tableContent
  );
};

export default Table;
