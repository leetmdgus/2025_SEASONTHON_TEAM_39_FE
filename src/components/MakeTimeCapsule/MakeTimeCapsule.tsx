import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaGift, FaLock } from "react-icons/fa";

export default function MakeTimeCapsule() {
  const [disabled, setDisabled] = useState(true); // 버튼 활성화 여부
  const [message, setMessage] = useState("");     // 메시지 입력값
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("캡슐이 봉인되었습니다! 🎁");
    navigate("/"); // 홈으로 이동
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* 캡슐 미리보기 */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center gap-2 mb-4">
          <FaLock className="text-gray-600" />
          <h2 className="font-bold text-lg">캡슐 미리보기</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-100 text-2xl">♡</div>
          <div>
            <p className="font-semibold">오늘의 감정 캡슐</p>
            <p className="text-sm text-gray-600">
              감정: <span className="bg-gray-200 px-2 py-0.5 rounded-md">평온함</span>
            </p>
            <p className="text-sm text-gray-500">3곡의 음악이 담겨있습니다</p>
          </div>
        </div>
      </div>

      {/* 개봉 시점 설정 */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center gap-2 mb-4">
          <FaCalendarAlt className="text-gray-600" />
          <h2 className="font-bold text-lg">개봉 시점 설정</h2>
        </div>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="open-date" />
            <FaLock /> 지금 바로 개봉
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="open-date" defaultChecked />
            <FaClock /> 날짜 지정
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="open-date" />
            <FaGift /> 특별한 날 (생일, 기념일 등)
          </label>
        </div>
        <input type="date" className="mt-4 w-full border rounded-lg p-2" />
      </div>

      {/* 미래의 나에게 메시지 */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-bold text-lg mb-2">미래의 나에게 메시지</h2>
        <textarea
          placeholder="미래의 나에게 편지를 남겨보세요"
          className="w-full border rounded-lg p-3 text-sm"
          rows={4}
          maxLength={500}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setDisabled(e.target.value.trim().length === 0); // 메시지가 있으면 버튼 활성화
          }}
        />
        <p className="text-right text-xs text-gray-500 mt-1">{message.length}/500자</p>
      </div>

      {/* 공개 설정 */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-bold text-lg mb-2">공개 설정</h2>
        <div className="space-y-2 text-sm">
          <button className="w-full flex justify-between items-center p-3 border rounded-lg">
            나만 보기 <span className="text-xs text-gray-500">선택됨</span>
          </button>
          <button
            className="w-full flex justify-between items-center p-3 border rounded-lg text-gray-400"
            disabled
          >
            친구와 공유 <span className="text-xs">준비중</span>
          </button>
        </div>
      </div>

      {/* 봉인 버튼 */}
      <button
        onClick={disabled ? undefined : handleSubmit}
        disabled={disabled}
        className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition 
          ${disabled
            ? "bg-gray-500 text-white cursor-not-allowed"
            : "text-white bg-gradient-to-r from-[#EFC6C6] via-[#AF6565] to-[#E9B6CD] hover:opacity-90 shadow-md"
          }`}
      >
        <FaLock />
        감정 캡슐 봉인하기
      </button>
    </div>
  );
}
