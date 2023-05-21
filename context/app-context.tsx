import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { AppContext } from "next/app";

type Props = {
    children: ReactNode;
};

type AppContextInterface = {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
} ;

const AppContext = createContext<AppContextInterface>({
    loading: true,
    setLoading: () => {},
});

const MyContext = createContext({ });

export const AppWrapper = ({ children }: Props) => {
    const [loading, setLoading] = useState(true);

    return <AppContext.Provider>

        <AppContext.
};

export const useAppContext = () => useContext(AppContext);
