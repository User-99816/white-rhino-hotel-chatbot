import ChatLauncher from "./chatbot/ui/ChatLauncher";
import HeroSlider from "./landing/HeroSlider";
import SchemaInjector from "./seo/SchemaInjector";
export default function App() {

    return (

        <>
            <SchemaInjector />
            {/* Your Website */}
            <HeroSlider />
            <ChatLauncher />

        </>

    );

}