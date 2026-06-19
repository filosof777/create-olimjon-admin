import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import storage from "../storage";
import config from "../../../config.ts";
import i18n from "i18next";
import { get } from "lodash";

interface AppState {
  sidebar: boolean;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  language: "uz" | "oz" | "ru" | "en";
  setLanguage: (language: "uz" | "oz" | "ru" | "en") => void;
  user: {
    isAuth: boolean;
    data: any;
    token: string;
  } | null;
  pfxLists: any;
  setLogout: () => void;
  getMeLoading: boolean;
  setGetMeLoading: (getMeLoading: boolean) => void;
  setPfxLists: (pfxLists: any) => void;
  application: any;
  setApplication: (application: any) => void;
  setSidebar: (sidebar: boolean) => void;
  setUser: (
    user: {
      isAuth: boolean;
      data: any;
      token: string;
    } | null
  ) => void;
}

export const useStore = create(
  persist<AppState>(
    set => ({
      sidebar: storage.get("sidebar") || true,
      theme: storage.get('theme') || 'light',
      setTheme: theme => {
        set({ theme });
        storage.set("theme", theme);
      },
      language: storage.get("language") || config.DEFAULT_LANGUAGE,
      setLogout: () => {
        set({ user: { isAuth: false, data: null, token: "" } });
        storage.clear();
      },
      application: null,
      setApplication: application => {
        set({ application });
      },
      getMeLoading: true,
      setGetMeLoading: getMeLoading => {
        set({ getMeLoading });
      },
      user: {
        isAuth: false,
        data: null,
        token: ""
      },
      pfxLists: [],
      setPfxLists: pfxLists => {
        set({ pfxLists });
      },
      setSidebar: sidebar => {
        set({ sidebar });
        storage.set("sidebar", String(sidebar));
      },

      setLanguage: language => {
        set({ language });
        i18n.changeLanguage(language);
        storage.set("language", language);
      },
      setUser: user => {
        set({ user });
        storage.set("token", get(user, "token", ""));
      }
    }),
    {
      name: "tdc-crm-store", // LocalStorage key nomi
      storage: createJSONStorage(() => localStorage)
    }
  )
);
