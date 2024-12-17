"use client";
import { useRef, useState } from "react";

export default function Speak({ speak }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex px-2 pt-5">
      <audio ref={audioRef} src={speak.src} />
      <button onClick={togglePlay}>
        <img src={isPlaying ? "/imgs/pause.png" : "/imgs/play.png"} alt={isPlaying ? "Pause" : "Play"} className="" />
      </button>
    </div>
  );
}
