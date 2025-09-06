import { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import img1 from "@/assets/images/album/img1.png";
import img2 from "@/assets/images/album/img2.png";
import img3 from "@/assets/images/album/img3.png";
import img4 from "@/assets/images/album/img4.png";

export default function History({ emotionTags }: { emotionTags: string[] }) {
  const album = [img1, img2, img3, img4];

  // 선택된 곡 인덱스 관리
  const [selected, setSelected] = useState<number | null>(null);

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
      onClick={() => setSelected(index)}
      className={`my-4 px-4 py-2 rounded-lg flex cursor-pointer transition 
        ${
          selected === index
            ? "bg-[#81A1BF]"
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
        <span className="text-xs font-semibol">{artist}</span>
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

      <MusicPlayer selected={selected} setSelected={setSelected} />
    </>
  );
}