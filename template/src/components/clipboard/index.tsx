import React, { useState } from "react";
import { Tooltip } from "antd";
import { CopyIcon } from "../../assets/icon/components/solar-line-duotone-icons";

type Props = {
  text: string;
  children: React.ReactNode;
  className?: string;
  successText?: string;
  defaultText?: string;
};

const Clipboard: React.FC<Props> = ({
  text,
  children,
  className = "",
  successText = "Nusxa olindi ✅",
  defaultText = "Nusxa olish"
}) => {
  const [copied, setCopied] = useState(false);

  const legacyCopy = (value: string) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "true");
      textarea.style.position = "fixed";
      textarea.style.top = "0";
      textarea.style.left = "0";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  };

  const handleCopy = async () => {
    try {
      if (window.isSecureContext && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ok = legacyCopy(text);
        if (!ok) throw new Error("Legacy copy failed");
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <Tooltip title={copied ? successText : defaultText}>
      {/* Tooltip GA HAR DOIM BITTA BOLA BERING */}
      <span
        className={`inline-flex items-center gap-2 ${className}`}
        // klaviatura bilan ham bosish imkoniyati
        role="button"
        tabIndex={0}
        onClick={e => {
          e.stopPropagation();
          handleCopy();
        }}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCopy();
          }
        }}
      >
        {children}
        <CopyIcon className="text-blue-500 !inline !w-5 !h-5 cursor-pointer" />
      </span>
    </Tooltip>
  );
};

export default Clipboard;
