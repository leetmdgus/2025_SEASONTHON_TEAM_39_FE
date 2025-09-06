import { useState } from "react";
import img1 from "@/assets/images/album/img1.png";
import img2 from "@/assets/images/album/img2.png";
import img3 from "@/assets/images/album/img3.png";
import img4 from "@/assets/images/album/img4.png";
import { FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RecommendMusic() {
  const album = [img1, img2, img3, img4];

  // 선택된 곡 인덱스 관리 (여러 개 가능)
  const [selected, setSelected] = useState<number[]>([]);

  // 선택/해제 토글 함수
  const toggleSelect = (index: number) => {
    if (selected.includes(index)) {
      // 이미 선택된 곡이면 해제
      setSelected(selected.filter((i) => i !== index));
    } else {
      // 새로운 곡 선택
      setSelected([...selected, index]);
    }
  };

  // 곡 카드 컴포넌트
  const SongCard = ({
    index,
    cover,
    title,
    artist,
    date,
  }: {
    index: number;
    cover: string;
    title: string;
    artist: string;
    date?: string;
  }) => (
    <div
      onClick={() => toggleSelect(index)}
      className={`my-4 px-4 py-2 rounded-lg flex cursor-pointer transition 
        ${
          selected.includes(index)
            ? "bg-[#81A1BF] text-white"
            : "bg-[#FEFEFE] hover:bg-gray-100"
        }`}
    >
      <div className="flex justify-start">
        <img
          src={cover}
          alt="album cover"
          className="w-14 h-14 rounded-md mr-4"
        />
      </div>

      {/* 곡 정보 */}
      <div className="flex flex-col mr-auto">
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-xs font-semibold">{artist}</span>
        <p className="text-xs w-fit px-1 rounded-xl bg-[#D9D9D9]">k-pop</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="text-lg bg-[#F4FBFF] w-[900px] h-[500px] p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-y-auto">
        {/* 9월 1일 */}
        <div className="my-2">
          <p>9월 1일</p>
          <SongCard
            index={0}
            cover={album[0]}
            title="Boom Boom Bass"
            artist="RIIZE"
          />
          <SongCard
            index={1}
            cover={album[1]}
            title="Like Jennie"
            artist="제니 (Jennie)"
          />
        </div>

        {/* 9월 3일 */}
        <div className="my-2">
          <p>9월 3일</p>
          <SongCard
            index={2}
            cover={album[2]}
            title="DRIP"
            artist="BABYMONSTER"
          />
        </div>
      </div>

      {/* 하단 고정 바 */}
      <div className="fixed bottom-0 left-0 w-full bg-[#D9D9D9] flex items-center px-8 md:px-64 py-3 z-50">
        <div className="flex justify-between items-center w-full px-8 py-4">
          {/* 왼쪽 텍스트 */}
          <div>
            <p className="text-sm font-semibold">{selected.length}곡 선택됨</p>
            <p className="text-xs text-gray-600">타임캡슐에 추가할 준비가 되었습니다</p>
          </div>

          {/* 오른쪽 버튼 */}
          <Link
            to={selected.length === 0 ? "#" : "/make-timecapsule"}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium shadow-md transition
                ${selected.length === 0
                ? "bg-gray-400 text-gray-200 cursor-not-allowed pointer-events-none"
                : "text-white bg-gradient-to-r from-[#EFC6C6] via-[#AF6565] to-[#E9B6CD] hover:opacity-90"
                }`}
            >
            타임 캡슐 만들기
            <FaMusic className="text-lg" />
          </Link>
        </div>
      </div>
    </>
  );
}
