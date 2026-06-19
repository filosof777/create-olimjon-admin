import { useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { storage } from "../../services";
import { useTranslation } from "react-i18next";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const PDFViewer = ({ src = "" }: { src: string }) => {
  const [numPages, setNumPages] = useState(0);
  const [width, setWidth] = useState(0);
  const { t } = useTranslation();
  const token = storage.get("token");

  // ✅ Muhim: file obyektini useMemo bilan barqaror qiling
  const fileSpec = useMemo(
    () => ({
      url: src,
      httpHeaders: { Authorization: `Bearer ${token}` },
      withCredentials: false
    }),
    [src, token]
  );

  const onDocumentLoadSuccess = ({ numPages }: any) => setNumPages(numPages);

  useEffect(() => {
    const el = document.querySelector(".pdf-viewer") as HTMLElement | null;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  return (
    <Document
      error={t("Fayl yuklashda xatolik yuz berdi qayta urinib ko'ring")}
      file={fileSpec}
      className="pdf-viewer"
      loading={
        <div role="status" className=" animate-pulse">
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-400 w-3/4 mb-4"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 w-3/4 mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5"></div>
          <div className="h-3.5 mb-3 bg-gray-200 rounded-full dark:bg-gray-400 w-full"></div>
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-400 w-3/4 mb-4"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 w-3/4 mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5"></div>
          <div className="h-3.5 mb-3 bg-gray-200 rounded-full dark:bg-gray-400 w-full"></div>
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-400 w-3/4 mb-4"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 w-3/4 mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5"></div>
          <div className="h-3.5 mb-3 bg-gray-200 rounded-full dark:bg-gray-400 w-full"></div>
        </div>
      }
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from({ length: numPages }, (_, i) => (
        <div key={`page_${i + 1}`} className="flex flex-col items-center">
          <Page pageNumber={i + 1} width={width} />
        </div>
      ))}
    </Document>
  );
};

export default PDFViewer;
