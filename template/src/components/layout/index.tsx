import Sidebar from "./sidebar";
import Content from "./content";
import {Outlet} from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div
        className={`flex flex-col w-full transition-all`}
      >
        <Header />
        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  );
};

export default Layout;
