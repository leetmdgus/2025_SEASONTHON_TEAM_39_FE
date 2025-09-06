import React from "react";
import camera_icon from "@/assets/icons/camera_icon.png"
import gallery from "@/assets/icons/gallery.png"

export default function PhotoUpload({handleFileChange}: {handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {/* 상단 아이콘 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-[#DCFCF8] via-[#7DBFB0] to-[#639A90] text-white">
          <img src={camera_icon} className="w-8 h-8" />
        </div>
        <p className="mt-4 text-lg font-semibold">사진을 선택해주세요</p>
        <p className="text-gray-500 text-sm">
          AI가 사진 속 감정을 분석하여 어울리는 음악을 추천해드립니다
        </p>
      </div>

      {/* 파일 선택 */}
      <label className="bg-[#F2F2F2] w-72 h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
        <span className="text-2xl"><img src={gallery} className="w-8 h-8" /></span>
        <span className="mt-2 font-medium">갤러리에서 선택</span>
        <span className="text-sm text-gray-400">
          JPG, PNG 파일을 업로드하세요
        </span>
        <input
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}