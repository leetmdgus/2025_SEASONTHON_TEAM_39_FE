import ButtonCard from "./ButtonCard";

import camera_icon from "@/assets/icons/camera_icon.png";
import calendar_icon from "@/assets/icons/calendar_icon.png";

export default function ButtonSection() {
    return(
        <div className="w-full mx-auto flex flex-col gap-10 my-8">
            <div className="flex justify-center font-semibold font-['Inter']">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-48">
                    <ButtonCard
                        go_to="/make-capsule"
                        icon={camera_icon}
                        title="AI 감정 분석"
                        description="사진 속 색감, 표정, 분위기를 분석해 정확한 감정 태그를 생성합니다"
                    />
                    <ButtonCard
                        go_to="/calendar"
                        icon={calendar_icon}
                        title="캘린더"
                        description="달력을 눌러 과거 감정 캡슐을 다시 추억할 수 있습니다."
                    />
                </div>
            </div>
           
        </div>
    );
}