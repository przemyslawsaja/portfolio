import {createContext, Dispatch, ReactNode, SetStateAction, Suspense, useContext, useState} from "react";
import { AppContext } from "next/app";
import { LoadingScreen } from "@/components/loading-screen";

type Props = {
    children: ReactNode;
};

type AppContextInterface = {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
} ;

const ApplicationContext = createContext<AppContextInterface>({
    loading: false,
    setLoading: () => {},
});

export const AppWrapper = ({ children }: Props) => {
    const [loading, setLoading] = useState(true);

    return <ApplicationContext.Provider value={{ loading, setLoading }}>
        <Suspense fallback={<LoadingScreen />}>
            {children}
        </Suspense>
    </ApplicationContext.Provider>
};

export const useAppContext = () => useContext(ApplicationContext);
