import image1 from "@/assets/images/home/image1.png";
import image2 from "@/assets/images/home/image2.png";
import image3 from "@/assets/images/home/image3.png";
import image4 from "@/assets/images/home/image4.png";
import { Link } from "react-router-dom";

export default function History() {
  return (
    <div className="w-full mx-auto space-y-6 px-12 mt-8 mb-24">
      {/* 섹션 타이틀 */}
      <h2 className="mx-4 text-black justify-start text-2xl font-medium font-['Inter']">
        감정 캡슐 히스토리
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* 긍정 히스토리 */}
        <div className="space-y-4 flex flex-col items-center">
        {/* 타이틀 바 */}
            <Link to="/history-positive">

                <div className="w-full max-w-md h-10 
                bg-gradient-to-r from-[#D2B5D7] via-[#B8BFE1] to-[#C6D3ED]
                                rounded-2xl shadow-md flex items-center
                                justify-center px-4 text-base
                                font-semibold text-gray-700 
                                px-8">
                    행복, 즐거움, 감동, 설렘의 순간을 다시 살펴보기
                </div>
            </Link>
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src={image1}
                        alt="긍정 히스토리 카드1"
                        className="w-full h-82 object-cover rounded-2xl shadow"
                    />
                    <img
                        src={image2}
                        alt="긍정 히스토리 카드2"
                        className="w-full h-82 object-cover rounded-2xl shadow"
                    />
                </div>
            </div>
        </div>

        {/* 부정 히스토리 */}
        <div className="space-y-4 flex flex-col items-center">
        {/* 타이틀 바 */}
            <Link to="/history-negative"> 
                <div className="w-full max-w-md h-10 
                bg-gradient-to-r from-[#8CCBBC] via-[#747BE3] to-[#9DA7F2]
                                rounded-2xl shadow-md flex items-center justify-center px-4 text-base font-semibold text-gray-700
                                px-8">
                    우울, 차분, 분노, 그리움의 순간을 다시 살펴보기
                </div>
            </Link>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src={image3}
                        alt="부정 히스토리 카드1"
                        className="w-full h-82 object-cover rounded-2xl shadow"
                    />
                    <img
                        src={image4}
                        alt="부정 히스토리 카드2"
                        className="w-full h-82 object-cover rounded-2xl shadow"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
