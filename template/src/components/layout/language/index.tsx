import {useStore} from "../../../services";
import {Popover} from "antd";
import config from "../../../../config.ts";
import {LanguageIcon} from "../../../assets/icon/components/solar-line-duotone-icons";

const Language = ({ openLanguage, setOpenLanguage }: any) => {
  const { language, setLanguage } = useStore(state => state);

  return (
    <Popover
      classNames={{
        body: "!p-1"
      }}
      open={openLanguage}
      onOpenChange={() => setOpenLanguage(false)}
      content={
        <div>
          {config.API_LANGUAGES.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={`flex items-center gap-2 cursor-pointer py-1 px-2 transition-all rounded-lg   ${
                  language === item.code
                    ? "bg-[#1668dc] text-white"
                    : "hover:text-[#1668dc]"
                }`}
                onClick={() => {
                  setLanguage(item.code);
                  setOpenLanguage(false);
                }}
              >
                <img className={"w-4 h-4"} src={item.icon} alt={item.name} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      }
      trigger={"click"}
    >
      <LanguageIcon
        className={"cursor-pointer !font-thin"}
        onClick={() => setOpenLanguage(true)}
      />
    </Popover>
  );
};

export default Language;
