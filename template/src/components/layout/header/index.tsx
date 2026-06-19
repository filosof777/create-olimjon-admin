import { useStore } from "../../../services";
import { Button, Popover, Typography } from "antd";
import React from "react";
import {
  HamburgerMenuIcon,
  SunIcon,
  MoonIcon
} from "../../../assets/icon/components/solar-line-duotone-icons";
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import Language from "../language";
import { usePost } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { notification } from "../../index.tsx";
import {
  UserIcon
} from "../../../assets/icon/components/solar-bold-duotone-icons";

const Header = () => {
  const { user, sidebar, setSidebar, setLogout, theme, setTheme } = useStore(
    state => state
  );
  const [openLanguage, setOpenLanguage] = React.useState(false);
  const [openTheme, setOpenTheme] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate, isLoading } = usePost();

  const handleThemeChange = (value: "light" | "dark") => {
    setTheme(value);
    const body = document.querySelector("body");
    if (body) {
      body.classList.remove("light", "dark");
      body.classList.add(value);
    }
  };

  React.useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.remove("light", "dark");
      body.classList.add(theme);
    }
  }, []);

  const logout = () => {
    mutate(
      {
        url: "/auth/logout",
        method: "post",
        data: null
      },
      {
        onSuccess: () => {
          setLogout();
          navigate("/login");
        },
        onError: error => {
          const message = get(
            error,
            "response.data.errorMessage",
            "Xatolik yuz berdi"
          );
          notification({
            type: "error",
            message: t(message)
          });
        }
      }
    );
  };

  return (
    <div
      className={
        "bg-[#fff] dark:bg-[#141B29] px-3 py-4 px-5 flex gap-5 justify-end items-center h-20"
      }
    >
      <div
        aria-label="Toggle sidebar"
        aria-pressed={sidebar}
        onClick={() => setSidebar(sidebar ? false : true)}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSidebar(sidebar ? false : true);
          }
        }}
        className={`mr-auto inline-flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer
          hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2
          bg-white/90 dark:bg-[#141B29]/90 `}
      >
        <HamburgerMenuIcon />
      </div>
      <Popover
        classNames={{
          body: "!p-1"
        }}
        open={openTheme}
        onOpenChange={() => setOpenTheme(false)}
        content={
          <div>
            <div
              className={`flex items-center gap-2 cursor-pointer py-1 px-2 transition-all rounded-lg ${
                theme === "light"
                  ? "bg-[#1668dc] text-white"
                  : "hover:text-[#1668dc]"
              }`}
              onClick={() => {
                handleThemeChange("light");
                setOpenTheme(false);
              }}
            >
              <SunIcon className="!w-4 !h-4" />
              <span>{t("Yorug'")}</span>
            </div>
            <div
              className={`flex items-center gap-2 cursor-pointer py-1 px-2 transition-all rounded-lg ${
                theme === "dark"
                  ? "bg-[#1668dc] text-white"
                  : "hover:text-[#1668dc]"
              }`}
              onClick={() => {
                handleThemeChange("dark");
                setOpenTheme(false);
              }}
            >
              <MoonIcon className="!w-4 !h-4" />
              <span>{t("Qorong'u")}</span>
            </div>
          </div>
        }
        trigger={"click"}
      >
        {theme === "light" ? (
          <SunIcon
            className={"cursor-pointer"}
            onClick={() => setOpenTheme(true)}
          />
        ) : (
          <MoonIcon
            className={"cursor-pointer"}
            onClick={() => setOpenTheme(true)}
          />
        )}
      </Popover>

      <Language openLanguage={openLanguage} setOpenLanguage={setOpenLanguage} />
      <Popover
        open={openUser}
        trigger={"click"}
        content={
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className={
                  "bg-blue-300 w-9 h-9 rounded-full flex items-center justify-center"
                }
              >
                <UserIcon className={"text-white"} />
              </div>

              <div>
                <Typography.Text className={"!leading-3"}>
                  {get(user, "data.name", "")}{" "}
                </Typography.Text>
                <Typography.Text
                  type={"secondary"}
                  className={"!block !leading-3"}
                >
                  {get(user, "data.role", "")}{" "}
                </Typography.Text>
              </div>
            </div>
            <Button
              className={"w-full"}
              danger={true}
              type={"primary"}
              loading={isLoading}
              onClick={logout}
            >
              {t("Tizimdan chiqish")}
            </Button>
          </div>
        }
        onOpenChange={() => setOpenUser(false)}
      >
        <div
          className={"flex gap-1 items-center cursor-pointer"}
          onClick={() => setOpenUser(true)}
        >
          <div
            className={
              "bg-blue-300 w-9 h-9 rounded-full flex items-center justify-center"
            }
          >
            <UserIcon className={"text-white"} />
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default Header;
