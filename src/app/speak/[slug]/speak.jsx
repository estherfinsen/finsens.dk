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
    <div>
      <audio ref={audioRef} src={speak.src} />
      <button onClick={togglePlay}>{isPlaying ? "Pause lyd" : "Afspil lyd"}</button>
    </div>
  );
}
