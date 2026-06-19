import EmptyImg from "../../assets/images/empty.png";
import { useTranslation } from "react-i18next";
const Index = ({
  text = "",
  description = ""
}: {
  text?: string;
  description?: string;
}) => {
  const { t } = useTranslation();
  return (
    <div className={"flex flex-col items-center justify-center"}>
      <img src={EmptyImg} alt="Empty" className={'w-20 sm:w-28 sm:h-28 lg:w-32 h-20 lg:h-32 mb-4 lg:w-40 lg:h-40'} />
      <h1 className={"font-medium text-center md:text-lg"}>
        {t(text ? text : "Ma'lumot mavjud emas")}
      </h1>
      {description ? (
        <p className={"text-[#171f2699] text-center"}>{t(description)}</p>
      ) : null}
    </div>
  );
};

export default Index;
