import { HomeView } from "@/views/home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSidePropsContext } from "next";

const HomePage = () => <HomeView/>

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale || 'en', [
                'welcome',
                'about',
                'experience',
                'common',
                'work',
                'contact',
            ])),
        },
    };
};

export default HomePage;

