import {i18n} from "../../services";
import {I18nextProvider} from "react-i18next";
import React from "react";

const I18Provider = ({children}: {children: React.ReactNode}) => {
    return (
        <I18nextProvider i18n={i18n()}>
            {children}
        </I18nextProvider>
    )
}

export default I18Provider