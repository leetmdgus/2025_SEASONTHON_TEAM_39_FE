
import { useState } from "react";
import { FaPlay, FaStepBackward, FaStepForward, FaPause } from "react-icons/fa";
import { tracks } from "../../data/data";

export default function MusicPlayer({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) {

  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = tracks[selected] || tracks[0];

  // 이전 곡
  const handlePrev = () => {
    setSelected((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  // 다음 곡
  const handleNext = () => {
    setSelected((prev) => (prev + 1) % tracks.length);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-900 text-white flex items-center px-8 md:px-64 py-3 z-50">
      {/* 앨범 아트 */}
      <img
        src={currentTrack.cover}
        alt="album cover"
        className="w-14 h-14 rounded-md mr-4"
      />

      {/* 곡 정보 */}
      <div className="flex flex-col mr-auto">
        <span className="text-sm font-semibold">{currentTrack.title}</span>
        <span className="text-xs text-gray-400">{currentTrack.artist}</span>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="flex items-center space-x-6">
        <button
          className="hover:text-gray-400 transition"
          onClick={handlePrev}
        >
          <FaStepBackward size={20} />
        </button>

        <button
          className="bg-white text-black rounded-full p-3 hover:scale-110 transition"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>

        <button
          className="hover:text-gray-400 transition"
          onClick={handleNext}
        >
          <FaStepForward size={20} />
        </button>
      </div>

      {/* 시간 표시 */}
      <div className="ml-6 text-sm text-gray-300">
        0:00 / {currentTrack.duration}
      </div>
    </div>
  );
}
