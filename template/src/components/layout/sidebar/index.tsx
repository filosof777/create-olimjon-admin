import React from "react";
import {Typography} from "antd";
import {get} from "lodash";
import {NavLink} from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import {
  AltArrowRightIcon,
  Buildings2Icon,
  ExitIcon,
  HamburgerMenuIcon,
  UserIdIcon
} from "../../../assets/icon/components/solar-line-duotone-icons";
import {helpers, useStore} from "../../../services";

const Sidebar: React.FC = () => {
  const { sidebar, setSidebar, user } = useStore();
  const [open, setOpen] = React.useState<null | number>(null);

  // Body scroll lock: faqat mobil (< xl) va sidebar ochiq bo‘lsa
  React.useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1280px)").matches;
    if (!isDesktop && sidebar) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [sidebar]);

  // Esc bilan yopish
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebar(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSidebar]);

  const routes = [
    {
      path: '/',
      title: "Bosh sahifa",
      icon: <Buildings2Icon />,
      permissions: ['admin', 'moderator', 'registrator']
    },
    {
      path: '/companies',
      title: "Korxonalar",
      icon: <Buildings2Icon />,
      permissions: ['admin', 'moderator', 'registrator']
    },
    {
      path: "/users",
      title: "Foydalanuvchilar",
      icon: <UserIdIcon />,
      permissions: ["admin"]
    },

    {
      path: "/settings/visits",
      title: "Tashriflar",
      icon: <ExitIcon />,
      permissions: ["admin"]
    }

  ];
  const filteredRoutes = helpers.filterRoutesByPermissions(
    routes,
    get(user, "data.role", [])
  );

  // Desktop (xl+) o‘lchamlari — xohlasangiz 2xl ni kengaytirishingiz mumkin
  const wideW = "w-[280px] min-w-[280px]";
  const collapsedW = "w-0 opacity-0 z-[-1]";

  return (
    <>
      {/* Mobil uchun "floating" hamburger (sidebar yopiq paytda) */}
      <button
        type="button"
        aria-label="Open sidebar"
        onClick={() => setSidebar(true)}
        className={`xl:hidden fixed left-3 top-3 z-40 rounded-xl w-10 h-10 flex items-center justify-center
                    bg-white/90 dark:bg-[#141B29]/90 backdrop-blur transition-all
                    ${
                      sidebar ? "pointer-events-none opacity-0" : "opacity-100"
                    }`}
      >
        <HamburgerMenuIcon />
      </button>

      {/* Overlay (faqat mobil) */}
      <div
        onClick={() => setSidebar(false)}
        className={`xl:hidden fixed inset-0 z-[100] bg-black/40 transition-opacity
                    ${
                      sidebar
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
      />

      {/* Sidebar — mobil: fixed slide-in; desktop: static collapse/expand (width 0 ↔ width 280/320) */}
      <aside
        role="navigation"
        aria-label="Main sidebar"
        onClick={e => e.stopPropagation()}
        className={`
          overflow-hidden pr-3
          fixed xl:static left-0 top-0 bottom-0 z-[100]
          h-full bg-[#fff] dark:bg-[#141B29] shadow-2xl xl:shadow-none
          transition-all
          ${sidebar ? wideW : collapsedW}
          ${sidebar ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}
        `}
      >
        {/* Header satri */}
        <div
          className={`flex items-center ${
            sidebar ? "pl-5 xl:pl-0" : ""
          } transition-all`}
        >
          {/* Mobil close tugma */}
          <button
            type="button"
            onClick={() => setSidebar(false)}
            aria-label="Close sidebar"
            className="rounded-xl w-8 h-11 p-0 flex items-center justify-center cursor-pointer hover:opacity-70 xl:hidden"
          >
            <HamburgerMenuIcon />
          </button>

          <div className="px-4 py-3 flex items-center gap-2">
            <img className="w-[50px] h-[50px]" src={Logo} alt="Logo" />
            <Typography.Text className="!leading-4 !font-medium ">
              "Savdoni rivojlantirish kompaniyasi" AJ
            </Typography.Text>
          </div>
        </div>

        {/* Navigatsiya */}
        <div className="pl-4 pr-3 xl:pr-0 overflow-y-auto h-[calc(100%-72px)] pt-2">
          {filteredRoutes?.map((item: any, index: number) => {
            const hasChildren = get(item, "children", [])?.length > 0;

            if (hasChildren) {
              const opened = open === index;
              return (
                <div key={index} className="relative px-3 py-2">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between cursor-pointer group"
                    onClick={() => setOpen(opened ? null : index)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="group-hover:[&_*]:!text-[#1e50e7]">
                        {get(item, "icon", "")}
                      </div>
                      <Typography.Text className="group-hover:!text-[#1e50e7]">
                        {get(item, "title", "")}
                      </Typography.Text>
                    </div>
                    <AltArrowRightIcon
                      className={`!w-5 !h-5 group-hover:!text-[#1e50e7] transition-all ${
                        opened ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Children accordion */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out
                                ${
                                  opened
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 p-4 rounded-xl bg-[#f4f7fb] dark:bg-[#0f1420] flex flex-col gap-2.5">
                        {get(item, "children", []).map(
                          (child: any, cidx: number) => (
                            <NavLink
                              to={get(child, "path")}
                              key={cidx}
                              className={({ isActive }) =>
                                `text-sm flex items-center gap-2 font-normal hover:text-[#1e50e7] ${
                                  isActive
                                    ? "text-[#1e50e7] [&_div]:!bg-[#1e50e7] [&_div]:!border-[#1e50e7]"
                                    : ""
                                }`
                              }
                              onClick={() => {
                                if (window.innerWidth < 1280) setSidebar(false); // mobil — bosilganda yopish
                              }}
                            >
                              <div className="w-2 h-2 rounded-full bg-white border border-[#1e50e7]" />
                              <span>{get(child, "title", "")}</span>
                            </NavLink>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Oddiy item
            return (
              <NavLink
                to={get(item, "path")}
                onClick={() => {
                  setOpen(null);
                  if (window.innerWidth < 1280) setSidebar(false); // mobil — bosilganda yopish
                }}
                key={index}
                className={({ isActive }) =>
                  `rounded-xl last:mb-0 px-3 py-2 flex justify-between items-center cursor-pointer
                   transition-all hover:[&_*]:!text-[#1e50e7]
                   ${
                     isActive
                       ? "bg-[#1e50e7] hover:[&_*]:!text-white shadow [&_*]:!text-white"
                       : ""
                   }`
                }
              >
                <div className="flex items-center gap-2">
                  <div>{get(item, "icon", "")}</div>
                  <Typography.Text>{get(item, "title", "")}</Typography.Text>
                </div>
              </NavLink>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
