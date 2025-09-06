import React, { useState } from "react";
import dayjs from "dayjs";
import arrow_left from "@/assets/icons/arrow_left.png"
import arrow_right from "@/assets/icons/arrow_right.png"
import negative_capsule from "@/assets/images/capsule/negative.png"
import positive_capsule from "@/assets/images/capsule/positive.png"
import CalendarModal from "./CalendarModal";

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(dayjs());
  
    // 이번 달 시작/끝 계산
    const startOfMonth = currentDate.startOf("month");
    const endOfMonth = currentDate.endOf("month");
    const startDay = startOfMonth.day(); // 시작 요일 (0=일요일)
    const daysInMonth = currentDate.daysInMonth();

    const [isNegativeModalOpen, setIsNegativeModalOpen] = useState(false);
    const [isPositiveModalOpen, setIsPositiveModalOpen] = useState(false);

    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    // 날짜 배열 생성
    const days: (number | null)[] = [];
    for (let i = 0; i < startDay; i++) days.push(null); // 앞에 빈칸
    for (let d = 1; d <= daysInMonth; d++) days.push(d);

    // 7일씩 끊어서 주 단위로
    const weeks: (number | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    // 월 이동 함수
    const handlePrevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
    const handleNextMonth = () => setCurrentDate(currentDate.add(1, "month"));
    // 캡슐이 있는 날짜 배열 (예: 5일, 12일, 20일에 캡슐 있음)
    const positiveCapsuleDays = [5, 12, 20];
    const negativeCapsuleDays = [1, 3, 7];

  return (
        <div className="
        w-full min-h-screen items-center gap-6
        flex flex-col">
            <div className="justify-center ">
                <div>
                    <div className="bg-[#FCFFFF] w-[1010px] py-4 rounded-[20px] mb-4 flex flex-row justify-around items-center px-8">
                    {/* 첫 번째 카드 */}
                    <div className="flex flex-col items-center">
                        <div className="text-[10px] font-light text-black">총 캡슐 수</div>
                        <div className="text-3xl font-medium text-black">0</div>
                    </div>

                    {/* 두 번째 카드 */}
                    <div className="flex flex-col items-center">
                        <div className="text-[10px] font-light text-black">긍정 캡슐</div>
                        <div className="text-3xl font-medium text-black">3</div>
                    </div>

                    {/* 세 번째 카드 */}
                    <div className="flex flex-col items-center">
                        <div className="text-[10px] font-light text-black">부정 캡슐</div>
                        <div className="text-3xl font-medium text-black">3</div>
                    </div>
                </div>
                {/* 캘린더 헤더 */}
                <div className="justify-start w-64 bg-[#FCFFFF] rounded-2xl flex items-center justify-between px-4 py-2">
                    <button onClick={handlePrevMonth}>
                    <img
                        src={arrow_left}
                        alt="prev"
                        className="w-4 h-4"
                    />
                    </button>
                    <span className="text-base font-bold">
                    {currentDate.format("YYYY년 M월")}
                    </span>
                    <button onClick={handleNextMonth}>
                    <img
                        src={arrow_right}
                        alt="next"
                        className="w-4 h-4"
                    />
                    </button>
                </div>
            </div>
        </div>
        
        <div className="w-full max-w-5xl rounded-2xl p-6 bg-[#D1E1F4]">

            {/* 요일 헤더 */}
            <div className="grid grid-cols-7 text-center text-xs font-medium text-black mb-4">
                {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                <div key={day}>{day}</div>
                ))}
            </div>

            {/* 날짜 박스 */}
            <div className="grid grid-cols-7 gap-4">
                {weeks.map((week, i) => (
                <React.Fragment key={i}>
                    {week.map((day, j) => (
                    <div
                        key={j}
                        className={`h-24 rounded-lg flex items-start justify-start p-2 text-sm ${
                        day ? "bg-white text-gray-700" : "bg-transparent"
                        }`}
                    >
                        {day && (
                        <>
                        <p>{day}</p>
                        {/* 해당 날짜가 capsuleDays에 포함되면만 이미지 표시 */}
                        {negativeCapsuleDays.includes(day) && (
                            <button onClick={()=>{
                                setSelectedDate(String(day))
                                setIsNegativeModalOpen(true)}}>
                                <img
                                    src={negative_capsule}
                                    alt="negative capsule"
                                    className="w-12 h-12"
                                />
                            </button>
                        )}
                        
                        {positiveCapsuleDays.includes(day) && (
                            <button onClick={()=>{
                                setSelectedDate(String(day))
                                setIsPositiveModalOpen(true)}}>
                                <img 
                                    src={positive_capsule}
                                    alt="positive capsule"
                                    className="w-12 h-12"
                                />
                            </button>
                        )}
                        </>
                    )}
                    </div>
                    ))}
                </React.Fragment>
                ))}
            </div>
        </div>

        {isNegativeModalOpen && (
            <CalendarModal date={selectedDate} isNegative={true} setIsNegativeModalOpen={setIsNegativeModalOpen} setIsPositiveModalOpen={setIsPositiveModalOpen} />
        )}

        {isPositiveModalOpen && (
            <CalendarModal date={selectedDate} isNegative={false} setIsPositiveModalOpen={setIsPositiveModalOpen} setIsNegativeModalOpen={setIsNegativeModalOpen} />
        )}
    </div>
    
  );
}
