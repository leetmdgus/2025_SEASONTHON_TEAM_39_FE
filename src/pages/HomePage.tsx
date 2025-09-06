import ButtonSection from "../components/Home/ButtonSection";
import History from "../components/Home/History";
import TextBand from "../components/Home/TextBand";
import Layout from "../layouts/Layout"

export default function HomePage() {
    return (
        <Layout>
            <div
                className="w-full min-h-screen 
                   bg-gradient-to-br from-[#F5F0F5] via-[#D9E9FC] to-[#89AED6]
                   flex flex-col items-center py-12 px-4"
                >
                <TextBand />
                {/* <EmotionButton /> */}
                <ButtonSection />
                <History />
            </div>
        </Layout>
    );
}