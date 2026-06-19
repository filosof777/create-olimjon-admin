import React from "react";
import axios from "axios";
import config from "../../config.ts";
import { storage } from "../services";

const UseDownloadDoc = ({
  url = "",
  fileName = ""
}: {
  url: string;
  fileName: string;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const downloadDoc = () => {
    setIsLoading(true);
    axios({
      url: `${config.API_ROOT}${url}`,
      method: "GET",
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${storage.get("token")}`
      }
    })
      .then(response => {
        setIsLoading(false);
        const contentDisposition =
          response.headers["content-disposition"] ||
          response.headers["Content-Disposition"];

        if (contentDisposition) {
          const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const utf8FilenameRegex = /filename\*=UTF-8''(.+)/;

          let filenameMatch = contentDisposition.match(utf8FilenameRegex);
          if (filenameMatch && filenameMatch[1]) {
            fileName = decodeURIComponent(filenameMatch[1]);
          } else {
            filenameMatch = contentDisposition.match(filenameRegex);
            if (filenameMatch && filenameMatch[1]) {
              fileName = filenameMatch[1].replace(/['"]/g, "");
            }
          }
        }

        const blob = new Blob([response.data], {
          type:
            response.headers["content-type"] ||
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(function(error) {
        setIsLoading(false);
        console.error("Download error:", error);
      });
  };
  return {
    downloadDoc,
    isLoading
  };
};

export default UseDownloadDoc;
