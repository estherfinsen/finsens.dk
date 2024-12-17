"use client";
import { useRef, useState } from "react";

export default function Speak({ speak }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
  };

  return (
    <div className="flex gap-8 pt-10">
      <audio ref={audioRef} src={speak.src} onTimeUpdate={handleTimeUpdate} className="hidden" />
      <div className="grid grid-cols-2 gap-10 items-center w-full">
        <button className="flex justify-center items-center" onClick={togglePlay}>
          <img src={isPlaying ? "/imgs/pause.png" : "/imgs/play.png"} alt={isPlaying ? "Pause" : "Play"} className="w-full" />
        </button>

        <div className="relative w-full h-10 bg-transparent border-8 border-red justify-self-end">
          <div className="absolute top-0 left-0 h-full bg-red" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
