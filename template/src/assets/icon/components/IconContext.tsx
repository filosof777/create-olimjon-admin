import  { createContext, useContext, ReactNode } from "react";

interface IconContextProps {
    size?: number;
    color?: string;
    className?: string;
}

const IconContext = createContext<IconContextProps>({});

export const IconProvider = ({
                                 children,
                                 size = 24,
                                 color = "currentColor",
                                 className = "",
                             }: IconContextProps & { children: ReactNode }) => {
    return (
        <IconContext.Provider value={{ size, color, className }}>
            {children}
        </IconContext.Provider>
    );
};

export const useIcon = () => useContext(IconContext);
