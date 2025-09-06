import sing_icon from "@/assets/icons/sing.png"
import { Link } from "react-router-dom";

export default function AnalyzeImage({image_url}: {image_url: string | null}) {
    
    return (
        <>
            <div className="flex flex-row gap-12">
                {/* 왼쪽: 이미지 박스 */}
                <div className="flex w-[400px] h-[550px] items-center 
                                justify-center bg-[#CEE6D5]">
                    <img
                    src={image_url || ""}
                    alt="Uploaded"
                    className="w-64 h-64 object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* 오른쪽: 내용 */}
                <div className="flex flex-col justify-center p-6 w-[400px] h-[550px] 
                                justify-center bg-[#CEE6D5]">
                     {/* 감정 분석 결과 */}
                        <div className="rounded-2xl p-6 space-y-6">
                        {/* 타이틀 */}
                        <p className="text-lg font-semibold">감정 분석 결과</p>

                        <p className="text-base font-medium">주요 감정</p>
                        {/* 대표 감정 */}
                        <div>
                            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">서글픔</span>
                        </div>

                        {/* 주요 감정 */}
                        <div className="space-y-4">
                            <div className="bg-[#F3EEEE] py-2 px-4 rounded-lg">
                                <div className="flex justify-between mb-1 text-sm">
                                    <span>평온함</span>
                                    <span>80%</span>
                                </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-rose-400 h-3 rounded-full" style={{ width: "80%" }}></div>
                            </div>
                            </div>

                            
                            <div className="bg-[#F3EEEE] py-2 px-4 rounded-lg">
                            <div className="flex justify-between mb-1 text-sm">
                                <span>고요함</span>
                                <span>55%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-sky-400 h-3 rounded-full" style={{ width: "55%" }}></div>
                            </div>
                            </div>
                        </div>

                        {/* 세부 분석 */}
                        <p className="text-base font-medium">감정 태그</p>

                        {/* 감정 태그 */}
                        <div className="flex flex-wrap gap-2">
                            {["자연", "따뜻함", "휴식", "안정감"].map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>
                        </div>
                </div>
                </div>
            <Link to="/recommend" className="m-12 py-4 px-16 rounded-3xl bg-gradient-to-r from-[#A5CDE4] to-[#6690C1]">
                <div className="flex ">
                    <img src={sing_icon} className="w-6 h-6" />
                    <div className="px-1">
                        감정 분석 바탕으로 음악 추천 받기
                    </div>
                </div>
            </Link>
        </>
    );
}