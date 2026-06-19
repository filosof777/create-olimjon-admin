import {useTranslation} from "react-i18next";
import NotFound from '../../assets/images/not-found.png'
import {Link} from "react-router-dom";
const Index = () => {
    const {t} = useTranslation();
    return (
        <div className={'dark:bg-black h-full flex  justify-center gap-10 items-center flex-col-reverse p-5 md:px-10 md:flex-row'}>
            <div className={''}>
                <p className={'text-4xl text-center font-medium dark:text-white md:text-start'}>{t("Sahifa topilmadi")}</p>
                <p className={'text-2xl text-center  font-thin  dark:text-white mb-5 md:text-start'}>{t("Kechirasiz siz izlayotgan sahifa topilmadi")}</p>
                <Link to={'/'} className={'text-[#407BFF] border-[#407BFF] border-solid border px-5 py-3 flex w-max mx-auto rounded-2xl md:m-0 lg:mt-20'}>{t("Bosh sahifaga qaytish")}</Link>
            </div>
            <img src={NotFound} alt="" className={'md:w-1/2'}/>
        </div>
    );
};

export default Index;