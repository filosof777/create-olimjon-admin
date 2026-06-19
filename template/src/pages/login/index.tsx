import LoginBg from "../../assets/images/login-bg.png";
import {useTranslation} from "react-i18next";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Button, Fields, notification} from "../../components";
import Form from "../../modules/form.tsx";
import {Field} from "formik";
import {useStore} from "../../services";
import {get} from "lodash";


const Index: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setUser } = useStore();


  return (
    <>
      <div
        style={{
          background: "linear-gradient(0deg, #9AC2E8 0%, #F8FBFF 100%)"
        }}
        className="h-screen"
      >
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xs bg-white overflow-hidden xl:max-w-[1200px] lg:rounded-2xl w-full lg:w-[85%] xl:w-[75%] h-full lg:h-[60%] xl:h-[80%] flex">
          <img
            src={LoginBg}
            alt=""
            className="hidden lg:block w-[60%] object-cover h-full"
          />

          <div className="p-7 flex-1 relative">
            <h1 className="font-bold text-2xl text-center">
              {t("Tizimga kirish")}
            </h1>
            <div className={"flex flex-col h-full justify-center"}>
              <Form
                url={"/auth/login"}
                method={"post"}
                name={"login"}
                fields={[
                  {
                    name: "username",
                    required: true
                  },
                  {
                    name: "password",
                    required: true
                  },

                ]}
                onSuccess={data => {
                  console.log(data);
                  notification({
                    type: "success",
                    message: t("Muvaffaqiyatli!")
                  });
                  setUser({
                    data: get(data, "data.data.user"),
                    token: get(data, "data.data.token"),
                    isAuth: true
                  });
                  navigate("/");
                }}
              >
                {() => {

                  return (
                    <div className={"flex flex-col gap-5 my-auto h-full "}>

                      <Field
                        component={Fields.Input}
                        size={"large"}
                        name={"username"}
                        label={t("Login")}
                        type={"text"}
                        antdProps={{
                          className: "h-16"
                        }}
                      />
                      <Field
                        component={Fields.Input}
                        size={"large"}
                        name={"password"}
                        label={t("Parol")}
                        type={"text"}
                        antdProps={{
                          className: "h-16",
                          type: "password"
                        }}
                      />
                      <Button
                        className={"!h-16 mt-10"}
                        type={"primary"}
                        htmlType={"submit"}
                      >
                        {t("Tizimga kirish")}
                      </Button>
                    </div>
                  );
                }}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
