import { Welcome } from "./sections/welcome";
import { About } from "./sections/about";
import { Experience } from "./sections/experience";
import { Work } from "./sections/work";
import { Contact } from "./sections/contact";
import { TopNavigation } from "@/components/top-navigation";

export const HomeView = () => {
    return <main>
        <TopNavigation />
        <Welcome />
        <About />
        <Experience />
        <Work />
        <Contact />
    </main>
}
