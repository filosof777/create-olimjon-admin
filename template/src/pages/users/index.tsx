import {Pagination, Panel, Table} from "../../components";
import {Typography} from "antd";
import Get from "../../modules/get.tsx";
import {get} from "lodash";
import UserDefault from "../../assets/images/user-default.png";
import useHooks from "../../hooks/useHooks.tsx";

const Index = () => {
  const { t, query,  } = useHooks();
  return (
    <Panel>
      <div className="flex items-center justify-between mb-4">
        <Typography.Title level={4}>{t("Foydalanuvchilar")}</Typography.Title>

      </div>
      <Get
        name={"users"}
        url={"/users"}
        params={{
          include: "",
          page: get(query, "page", 1),
          limit: get(query, "limit", 50)
        }}
      >
        {({ items, isLoading, meta }) => {
          return (
            <>
              <Table
                items={items}
                size={"small"}
                isLoading={isLoading}

                name={"users"}
                url={"/users"}
                columns={[
                  {
                    title: t("ID"),
                    dataIndex: "id",
                    width: 40
                  },
                  {
                    title: t("Rasm"),
                    dataIndex: "photo",
                    className: 'w-12',
                    render: value => {
                      return (
                        <img
                          className={"w-10 h-10 rounded-full object-cover "}
                          src={value ? get(value, "src", "") : UserDefault}
                          alt=""
                        />
                      );
                    }
                  },
                  {
                    title: t("To'liq ismi"),
                    dataIndex: "name",
                  },
                  {
                    title: t("Rol"),
                    dataIndex: "role",
                  }
                ]}
              />
              <Pagination meta={meta} rootClassName={"!mt-4"} align={"end"} />
            </>
          );
        }}
      </Get>
    </Panel>
  );
};

export default Index;
