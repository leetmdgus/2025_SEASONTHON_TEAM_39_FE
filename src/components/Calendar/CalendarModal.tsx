import img4 from "@/assets/images/album/img4.png"
import img5 from "@/assets/images/album/img5.png"

export default function CalendarModal({
  isNegative,
  date,
  setIsNegativeModalOpen,
  setIsPositiveModalOpen,
}: {
  isNegative: boolean;
  date: string | null;
  setIsNegativeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPositiveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => {
          isNegative
            ? setIsNegativeModalOpen(false)
            : setIsPositiveModalOpen(false);
        }}
      ></div>

      {/* Modal */}
      <div className={`relative flex flex-col justify-center items-center w-[807px] h-[574px] 
        ${isNegative ? "bg-gradient-to-b from-[#AACFBF] to-[#DFE0E0]" : "bg-gradient-to-b from-[#FFF89C] to-[#DFE0E0]"} rounded-[20px] shadow-lg z-50`}>
            {/* 닫기 버튼 */}
            <button
            className="absolute top-4 right-8 text-gray-700 text-xl font-bold hover:text-black"
            onClick={() => {
                isNegative
                ? setIsNegativeModalOpen(false)
                : setIsPositiveModalOpen(false);
            }}
            >
            ×
            </button>
            
            <p className="absolute top-8 left-12 text-2xl"> 9월 {date}일</p>
            {/* 내용 */}
            {isNegative ? (
                <div className="">
                    <div className="grid grid-cols-2 px-12 gap-8 py-4">
                        {/* 플레이 리스트 */}
                        <div className="bg-[#F3EEEE] h-fit flex flex-row rounded-2xl py-2 pl-2 pr-12 ">
                            <div className="flex justify-center w-[100px] object-cover py-2">
                                <img src={img4} alt="Playlist Cover" 
                                className="h-[50px] object-cover" />
                            </div>
                            <div className="px-1">
                                <p className="text-base font-semibold m-1">deja vu</p>
                                <p className="text-sm m-1">Olivia Rodrigo</p>
                                <p className="text-xs px-2 bg-[#E5E4E4] rounded-2xl w-fit m-1">pop</p>
                            </div>
                        </div>
                        {/* 감정 분석 결과 */}
                        <div className="bg-[#F3EEEE] rounded-2xl p-6 space-y-6">
                        {/* 타이틀 */}
                        <p className="text-base font-medium">감정 분석 결과</p>

                        {/* 대표 감정 */}
                        <div>
                            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">서글픔</span>
                        </div>

                        {/* 주요 감정 */}
                        <div className="space-y-4">
                            <div>
                            <div className="flex justify-between mb-1 text-sm">
                                <span>서글픔</span>
                                <span>80%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-rose-400 h-3 rounded-full" style={{ width: "80%" }}></div>
                            </div>
                            </div>

                            <div>
                            <div className="flex justify-between mb-1 text-sm">
                                <span>외로움</span>
                                <span>55%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-sky-400 h-3 rounded-full" style={{ width: "55%" }}></div>
                            </div>
                            </div>
                        </div>

                        {/* 세부 분석 */}
                        <p className="text-base font-medium">세부 분석</p>

                        {/* 감정 태그 */}
                        <div className="flex flex-wrap gap-2">
                            {["차분함", "따뜻함", "질투", "헤어짐"].map((tag, idx) => (
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
                    {/* 하루 일기 */}
                    <div className="px-12">
                        하루 감정 일기 (마음에 있는 감정을 털어놓아 보세요)
                    </div>
                    
                </div>
            ) :
            <div className="">
                    <div className="grid grid-cols-2 px-12 gap-8 py-4">
                        {/* 플레이 리스트 */}
                        <div className="bg-[#F3EEEE] h-fit flex flex-row rounded-2xl py-2 pl-2 pr-12 ">
                            <div className="flex justify-center w-[100px] object-cover py-2">
                                <img src={img5} alt="Playlist Cover" 
                                className="h-[50px] object-cover" />
                            </div>
                            <div className="px-1">
                                <p className="text-base font-semibold m-1">REBEL HEART</p>
                                <p className="text-sm m-1">IVE (아이브)</p>
                                <p className="text-xs px-2 bg-[#E5E4E4] rounded-2xl w-fit m-1">k-pop</p>
                            </div>
                        </div>
                        {/* 감정 분석 결과 */}
                        <div className="bg-[#F3EEEE] rounded-2xl p-6 space-y-6">
                        {/* 타이틀 */}
                        <p className="text-base font-medium">감정 분석 결과</p>

                        {/* 대표 감정 */}
                        <div>
                            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">즐거움</span>
                        </div>

                        {/* 주요 감정 */}
                        <div className="space-y-4">
                            <div>
                            <div className="flex justify-between mb-1 text-sm">
                                <span>즐거움</span>
                                <span>80%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-rose-400 h-3 rounded-full" style={{ width: "80%" }}></div>
                            </div>
                            </div>

                            <div>
                            <div className="flex justify-between mb-1 text-sm">
                                <span>따뜻함</span>
                                <span>55%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-sky-400 h-3 rounded-full" style={{ width: "55%" }}></div>
                            </div>
                            </div>
                        </div>

                        {/* 세부 분석 */}
                        <p className="text-base font-medium">세부 분석</p>

                        {/* 감정 태그 */}
                        <div className="flex flex-wrap gap-2">
                            {["설렘", "따뜻함", "신남", "응원"].map((tag, idx) => (
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
                    {/* 하루 일기 */}
                    <div className="px-12">
                        하루 감정 일기 (마음에 있는 감정을 털어놓아 보세요)
                    </div>
                    
                </div>}
            
        </div>
    </div>
  );
}
