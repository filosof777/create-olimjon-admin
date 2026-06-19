import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "../components/layout";
import NotFound from "../pages/not-found";
import Login from "../pages/login";

import {get} from "lodash";
import {helpers, storage, useStore} from "../services";
import {Spin} from "antd";
import React from "react";
import Users from "../pages/users";

export const useRoutes = () => {
  const routes: any[] = [

    {
      path: "/users",
      element: <Users />,
      permissions: ['admin']
    },

  ];

  return routes;
};

const RouteProvider: React.FC = () => {
  const { user, getMeLoading } = useStore();
  const routes = useRoutes();

  const hasToken = Boolean(storage.get("token"));
  const isUserLoaded = Boolean(get(user, "data.id")); // foydalanuvchi ma'lumoti yuklanganmi

  // Token bor bo'lsa, lekin user hali kelmagan bo'lsa yoki getMeLoading true bo'lsa — booting
  const isBooting = getMeLoading || (hasToken && !isUserLoaded);

  const filteredRoutes = helpers.filterRoutesByPermissions(
    routes,
    get(user, "data.role", [])
  );

  if (isBooting) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin spinning size="large" />
      </div>
    );
  }

  // Public routing (token yo'q) — faqat login sahifasi
  if (!hasToken) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* boshqa hamma yo'llar login'ga yo'naltiriladi */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  // Auth routing (token bor va user yuklangan)
  return (
    <Routes>
      <Route element={<Layout />}>
        {filteredRoutes.map((route: any, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* Auth bo'lganda mavjud bo'lmagan sahifalar uchun 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* login sahifasiga tasodifiy kirilsa, bosh sahifaga qaytaramiz */}
      <Route path="/login" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouteProvider;
