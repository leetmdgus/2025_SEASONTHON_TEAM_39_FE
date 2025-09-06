import MakeTimeCapsule from "../components/MakeTimeCapsule/MakeTimeCapsule";
import Layout from "../layouts/Layout";

export default function MakeTimeCapsulePage() {
    return (
        <Layout>
            <div
            className="w-full min-h-screen 
                bg-gradient-to-b from-[#F5F0F5] via-[#D9E9FC] to-[#89AED6]
                flex flex-col items-center py-12 px-4"
            >
                <MakeTimeCapsule />
            </div>
        </Layout>
    );
}