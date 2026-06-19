import {queryBuilder, storage, useStore, ws} from "../../services";
import {get} from "lodash";
import {useEffect} from "react";
import useHooks from "../../hooks/useHooks.tsx";
import axios from "axios";
import config from "../../../config.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {notification} from "../../components";
import dayjs from "dayjs";

const Index = () => {
  const { query, t } = useHooks();
  const location = useLocation();
  const navigate = useNavigate();
  const token = get(query, "token");
  const { setUser, setPfxLists, setLogout,  setGetMeLoading } = useStore();

  useEffect(() => {
    storage.set("token", token as string);

    axios
      .get(
        queryBuilder(`${config.API_ROOT}/auth/get-me`, {
          include: "photo"
        }),
        {
          headers: {
            Authorization: `Bearer ${storage.get("token")}`,
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0"
          }
        }
      )
      .then(data => {
        setUser({
          data: get(data, "data.data"),
          isAuth: true,
          token: token as string
        });
        storage.set("token", token as string);
        setGetMeLoading(false);
        const url = new URL(window.location.href);
        if (url.searchParams.has("token")) {
          url.searchParams.delete("token");
          window.history.replaceState({}, document.title, url.toString());
        }

        if (location.pathname === "/login") {
          navigate("/");
        }
      })
      .catch(error => {
        if (!get(storage, "token") && location.pathname !== "/login") {
          navigate("/login");
          setLogout();
        }
        setGetMeLoading(false);
        if (token) {
          notification({
            type: "error",
            message: t(
              get(
                error,
                "response.data.errorMessage",
                t("Что-то пошло не так!")
              )
            )
          });
          navigate(location.pathname);
        }
        setLogout();
      });
  }, [token]);

  const apiKey = () => {
    setPfxLists([]);
    ws({
      name: "apikey",
      arguments: config.API_KEYS,
      onSuccess: () => {
        pfxList();
      }
    });
  };

  const pfxList = () => {
    ws({
      plugin: "pfx",
      name: "list_all_certificates",
      onSuccess: data => {
        const pfxLists = get(data, "certificates", []).reduce(
          (prev: any, file: any) => {
            const alias = file.alias.toUpperCase();

            const values = alias
              .split(",")
              .reduce((acc: Record<string, string>, curr: string) => {
                const [key, value] = curr.split("=");
                if (!value) {
                  return acc;
                }
                return { ...acc, [key]: value };
              }, {});

            if (!Object.keys(values).length) {
              return [...prev];
            }

            const validToStr = get(values, "VALIDTO", "");
            const validTo = dayjs(validToStr, "YYYY.MM.DD HH:mm:ss");
            const currentTimestamp = dayjs().valueOf();
            const validToTimestamp = validTo.isValid() ? validTo.valueOf() : 0;
            const isActive = validToTimestamp > currentTimestamp;

            const user = {
              full_name: get(values, "CN", ""),
              name: get(values, "NAME", ""),
              surname: get(values, "SURNAME", ""),
              location: get(values, "L", ""),
              state: get(values, "ST", ""),
              country: get(values, "C", ""),
              uuid: get(values, "UID", ""),
              pinfl: get(values, "1.2.860.3.16.1.2", ""),
              serial_number: get(values, "SERIALNUMBER", ""),
              valid_from: dayjs(
                get(values, "VALIDFROM", ""),
                "YYYY.MM.DD HH:mm:ss"
              ).format("HH:mm:ss / DD.MM.YYYY"),
              valid_to: dayjs(validToStr, "YYYY.MM.DD HH:mm:ss").format(
                "HH:mm:ss / DD.MM.YYYY"
              ),
              active: isActive,
              disk: file
            };

            return [...prev, user];
          },
          []
        );
        setPfxLists(pfxLists);
      }
    });
  };

  useEffect(() => {
    apiKey();
  }, []);

  return null;
};

export default Index;
