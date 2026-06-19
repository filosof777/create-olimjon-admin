import fs from "fs";
import path from "path";
import readline from "readline";

// Define templates for index.tsx and form.tsx
const indexTemplate = (url, pageTitle, moduleName) => `
import { Typography } from "antd";
import Get from "../../../modules/get.tsx";
import { Button, Pagination, Panel, Table } from "../../../components";
import useHooks from "../../../hooks/useHooks.tsx";
import config from "../../../../config.ts";
import React from "react";
import ModalData from "./form.tsx";
import { useAccess } from "../../../hooks";

function Index() {
  const { t, get, query } = useHooks();
  const { isDelete, isCreate, isUpdate } = useAccess();

  const [modalData, setModalData] = React.useState({
    isOpen: false,
    data: null
  });

  return (
    <Panel>
      <div className="flex items-center justify-between mb-4">
        <Typography.Title level={4}>{t("${pageTitle}")}</Typography.Title>
        {isCreate ? <Button
          type="primary"
          onClick={() =>
            setModalData({
              isOpen: true,
              data: null
            })
          }
        >
          {t("Qo'shish")}
        </Button> : null}
      </div>
      <Get
        name={"${moduleName}"}
        url={"${url}"}
        params={{
          page: get(query, "page", 1),
          limit: get(query, "limit", 50)
        }}
      >
        {({ items, isLoading, meta }) => {
          return (
            <>
              <Table
                url={"${url}"}
                items={items}
                name={"${moduleName}"}
                isLoading={isLoading}
                size={"small"}
                editAction={(item) => {
                  setModalData({
                    isOpen: true,
                    data: item
                  });
                }}
                hasSwitch={isUpdate}
                hasDelete={isDelete}
                hasEdit={isUpdate}
                columns={[
                  {
                    title: t("ID"),
                    dataIndex: "id",
                    key: "id"
                  },
                  ...config.API_LANGUAGES.map((item) => ({
                    title: t(\`Nomi ({{code}})\`, { code: item.shortName }),
                    dataIndex: \`name_\${item.code}\`
                  })),
                  {
                    type: "switch",
                    title: t("Holati"),
                    dataIndex: "status"
                  }
                ]}
              />
              <Pagination meta={meta} rootClassName={"!mt-4"} align={"end"} />
            </>
          );
        }}
      </Get>
      <ModalData modalData={modalData} setModalData={setModalData} />
    </Panel>
  );
}

export default Index;
`;

const formTemplate = (url, pageTitle, moduleName) => `
import { get } from "lodash";
import Form from "../../../modules/form.tsx";
import { Button, Fields, Modal, notification } from "../../../components";
import { useTranslation } from "react-i18next";
import config from "../../../../config.ts";
import { Field } from "formik";

function ModalData({ modalData, setModalData }:any) {
  const { t } = useTranslation();
  return (
    <Modal
      open={get(modalData, "isOpen")}
      onCancel={() => setModalData({ isOpen: false, data: null })}
      title={t("${pageTitle}")}
    >
      <Form
        name={"${moduleName}"}
        method={get(modalData, "data.id") ? "put" : "post"}
        url={
          get(modalData, "data.id")
            ? \`${url}/\${get(modalData, "data.id")}\`
            : \`${url}\`
        }
        onSuccess={() => {
          setModalData({ isOpen: false, data: null });
          notification({
            type: "success",
            message: t("Muvaffaqiyatli saqlandi")
          });
        }}
        fields={[
          ...config.API_LANGUAGES.map((item) => ({
            name: \`name_\${get(item, "code")}\`,
            value: get(modalData, \`data.name_\${get(item, "code")}\`),
            required: true
          })),
          {
            name: "status",
            value: get(modalData, "data.status", 1)
          }
        ]}
      >
        {({ isLoading }) => {
          return (
            <div className="flex flex-col gap-4">
              {config.API_LANGUAGES.map((item) => {
                return (
                  <Field
                    component={Fields.Input}
                    name={\`name_\${get(item, "code")}\`}
                    label={t("Nomi ({{code}})", {
                      code: get(item, "shortName")
                    })}
                  />
                );
              })}
              <Field
                component={Fields.Switch}
                name="status"
                label={t("Holati")}
              />
              <div className="flex justify-end gap-5">
                <Button
                  htmlType="button"
                  variant="filled"
                  color="default"
                  onClick={() => setModalData({ isOpen: false, data: null })}
                >
                  {t("Bekor qilish")}
                </Button>
                <Button loading={isLoading} htmlType="submit" type="primary">
                  {t("Saqlash")}
                </Button>
              </div>
            </div>
          );
        }}
      </Form>
    </Modal>
  );
}

export default ModalData;
`;

// Prompt user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

async function generateFiles() {
  // Prompt for packaging-type
  const folder = await askQuestion("Papka nomi (e.g., positions, users): ");
  if (!folder) {
    console.error("Kiritish majburiy!");
    rl.close();
    return;
  }

  // Prompt for URL
  const url = await askQuestion("URL (e.g., /positions, /users): ");
  if (!url) {
    console.error("URL majburiy!");
    rl.close();
    return;
  }

  // Prompt for page title
  const pageTitle = await askQuestion(
    "Nomi (e.g., Lavozimlar, Foydalanuvchilar): "
  );
  if (!pageTitle) {
    console.error("Nom kiritish majburiy!");
    rl.close();
    return;
  }

  // Define target directory
  const targetDir = path.join("src", "pages", "settings", folder);
  const indexPath = path.join(targetDir, "index.tsx");
  const formPath = path.join(targetDir, "form.tsx");

  try {
    // Create directory if it doesn't exist
    fs.mkdirSync(targetDir, { recursive: true });

    // Generate and write index.tsx
    fs.writeFileSync(indexPath, indexTemplate(url, pageTitle, folder));

    // Generate and write form.tsx
    fs.writeFileSync(formPath, formTemplate(url, pageTitle, folder));
  } catch (error) {
  } finally {
    rl.close();
  }
}

generateFiles();
