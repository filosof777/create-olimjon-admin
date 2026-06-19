import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import {initReactI18next} from 'react-i18next'
import {storage} from "../index.ts";
import config from "../../../config.ts";
import axios from "axios";

const fallbackLng = storage.get('language') || config.DEFAULT_LANGUAGE
const availableLanguages = config.API_LANGUAGES.map((item: any) => item.code)
const options = {
    resources: {},
    fallbackLng,
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
        escapeValue: false,
    },
    nsSeparator: "|",
    saveMissing: false,
    backend: {
        addPath: `${config.API_ROOT}/translations/{{lng}}?_f=json`,
        ajax: (url: any, _options: any, callback: any, data: any) => {
            axios.post(url, {
                message: Object.keys(data).length ? Object.keys(data)[0] : ''
            }).then(callback)
        },
        // loadPath: `${config.API_ROOT}/locales/{{lng}}/translation.json?_f=json`,
    },
}

export default () => {
    i18n
        .use(XHR)
        .use(initReactI18next)
        .init(options)

    return i18n
}
