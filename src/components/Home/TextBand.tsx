export default function TextBand() {
  return (
    <div className="w-full mx-auto flex flex-col gap-2 my-2">
      {/* 타이틀 */}
      <div className="flex justify-center text-black text-2xl font-semibold font-['Inter']">
        오늘의 감정을 음악으로 봉인하세요
      </div>
      {/* 서브 타이틀 */}
      <div className="flex justify-center text-black text-xl font-extralight font-['Inter']">
        사진 한 장으로 시작되는 감정 여행. AI가 분석한 당신의 마음에 어울리는 음악을 찾아드립니다.
      </div>
    </div>
  );
}