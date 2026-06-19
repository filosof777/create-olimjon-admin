import RouteProvider from "./routes";
import AntdProvider from "./providers/antd";
import { BrowserRouter } from "react-router-dom";
import I18Provider from "./providers/i18n";

import { IconProvider } from "./assets/icon/components/IconContext.tsx";
import ApiProvider from "./providers/api";
import ReactQueryProvider from "./providers/react-query";

function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <I18Provider>
          <AntdProvider>
            <ApiProvider />

            <IconProvider
              className={"text-[#1C274C] dark:text-white w-6  h-6 "}
            >
              <RouteProvider />
            </IconProvider>
          </AntdProvider>
        </I18Provider>
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
