import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FieldProps } from "formik";
import { Typography } from "antd";
import useHooks from "../../../hooks/useHooks.tsx";
import { helpers } from "../../../services";

interface Props extends FieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  antdProps?: any;
  rootClassName?: string;
}
function Index(props: Props) {
  const {
    form: { setFieldValue, setFieldTouched, errors, touched },
    field: { name, value },
    label,
    placeholder,
    rootClassName = '[&_.ck-content]:min-h-[50vh]'
  } = props;
  const { t } = useHooks();
  const errorValue = helpers.getNestedValue(errors, name);
  const touchedError = helpers.getNestedValue(touched, name);
  const config: any = {
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph"
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1"
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2"
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3"
        }
      ]
    },
    removePlugins: ["MediaEmbedToolbar"],
    fontSize: {
      defaultLabel: "17px",
      options: [
        {
          title: "tiny",
          model: "11px"
        },
        {
          title: "small",
          model: "14px"
        },
        {
          title: "default",
          model: "17px"
        },
        {
          title: "big",
          model: "20px"
        },
        {
          title: "huge",
          model: "23px"
        }
      ]
    },

    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "indent",
        "outdent",
        "|",
        "imageUpload",
        "code",
        "codeBlock",
        "blockQuote",
        "insertTable",
        "undo",
        "redo",
        "alignment",
        "fontBackgroundColor",
        "fontColor",
        "fontSize",
        "fontFamily",
        "highlight",
        "horizontalLine",
        "removeFormat",
        "underline"
      ]
    },
    image: {
      toolbar: [
        "imageTextAlternative",
        "|",
        "imageStyle:alignLeft",
        "imageStyle:full",
        "imageStyle:alignRight",
        "imageStyle:alignCenter"
      ],

      styles: ["full", "alignLeft", "alignCenter", "alignRight"]
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties"
      ]
    },
    placeholder: placeholder,
    codeBlock: {
      languages: [
        {
          language: "javascript",
          label: "JavaScript",
          class: "js javascript js-code"
        }
      ]
    },
    link: {
      decorators: {
        addClassStyle1: {
          mode: "manual",
          label: "Highlight link",
          attributes: {
            class: "highlight-link"
          }
        },
        openInNewTab: {
          mode: "manual",
          label: "Open in a new tab",
          attributes: {
            target: "_blank",
            rel: "noopener noreferrer"
          }
        }
      }
    }
  };
  return (
    <div
      className={`   ${rootClassName} ${
        !value && touchedError && errorValue
          ? "[&_.ck-content]:!border-[red] "
          : ""
      }  
        `}
    >
      {label ? <Typography.Text>{t(label)}</Typography.Text> : null}
      <CKEditor
        // @ts-ignore
        editor={ClassicEditor}
        config={config}
        onBlur={() => {
          setFieldTouched(name, true);
        }}
        data={value === undefined || value === null ? "" : value}
        onChange={(_: any, editor: any) => {
          setFieldValue(name, editor.getData());
        }}
      />
    </div>
  );
}

export default Index;
