import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Slider } from "primereact/slider";
import React, { useEffect, useRef, useState } from "react";

const AudioSong = () => {
  const audioRef = useRef();
  const progressBarContainerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const onSliderChange = (e) => {
    const newTime = (e.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTime(audio.currentTime);
    };
    const setAudioDuration = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleProgressBarClick = (e) => {
    const rect = progressBarContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickedValue = (x * audioRef.current.duration) / rect.width;
    audioRef.current.currentTime = clickedValue;
  };
  const [isClicked, setIsClicked] = useState(false);
  const [volumeSound, setVolumeSound] = useState(true);
  const [savedVolume, setSavedVolume] = useState(50);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClickHeart = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    // Cập nhật âm lượng của phần tử audio khi volume thay đổi
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const handleClickVolume = () => {
    setVolumeSound(!volumeSound); // Đảo trạng thái âm lượng
    if (!volumeSound) {
      // Nếu đang tắt âm lượng, phục hồi âm lượng từ savedVolume
      setVolume(savedVolume);
    } else {
      // Nếu đang bật âm lượng, lưu giá trị hiện tại và đặt về 0
      setSavedVolume(volume);
      setVolume(0);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.value / 100;
    audioRef.current.volume = newVolume;
    setVolume(e.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>
        Trong tình yêu của mẹ -{" "}
        <span style={{ color: "#03CE58" }}>Diệu Hiền</span>
      </h3>
      <audio ref={audioRef}>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/nodejs-9c5e8.appspot.com/o/songs%2F1Phut-Andiez-7632303.mp3?alt=media&token=4a162195-a4f6-4fa4-a095-12ec3561f0f1"
          type="audio/mpeg"
        />
        Trình duyệt của bạn không hỗ trợ thẻ audio.
      </audio>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="flex justify-content-center gap-3">
          <div>{formatTime(currentTime)}</div>
          <div ref={progressBarContainerRef} onClick={handleProgressBarClick}>
            {/* <Slider
              value={progress}
              className="w-30rem h-1rem"
              showValue={false}
            /> */}
            <Slider
              style={{ width: "50rem" }}
              value={progress}
              onChange={onSliderChange}
              onSlideEnd={() => setIsPlaying(true)}
            />
          </div>
          <div>{formatTime(duration - currentTime)}</div>
        </div>
      </div>

      <div
        className="mt-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button
          className="px-5"
          style={
            isClicked
              ? { background: "#03CE58", border: "none" }
              : { background: "transparent", border: "none" }
          }
          onClick={handleClickHeart}
        >
          <i
            style={{
              fontSize: "1.5rem",
              width: "1.5rem",
              height: "1.5rem",
            }}
            className={isClicked ? "pi pi-heart" : "pi pi-heart"}
          ></i>
        </Button>{" "}
        <Button
          className="px-5"
          style={{ border: "none", background: "transparent" }}
        >
          <i
            style={{ fontSize: "1.5rem", width: "1.5rem", height: "1.5rem" }}
            className="pi pi-sync"
          ></i>
        </Button>{" "}
        <Button
          className="px-5"
          style={{ border: "none", background: "transparent" }}
        >
          <i
            style={{ fontSize: "1.5rem", width: "1.5rem", height: "1.5rem" }}
            className="pi pi-step-backward-alt"
          ></i>
        </Button>{" "}
        <Button
          className="px-5"
          style={{ border: "none", background: "transparent" }}
          onClick={toggleAudio}
        >
          <i
            style={{ fontSize: "1.5rem", width: "1.5rem", height: "1.5rem" }}
            className={isPlaying ? "pi pi-pause" : "pi pi-play"}
          ></i>
        </Button>{" "}
        <Button
          className="px-5"
          style={{ border: "none", background: "transparent" }}
        >
          <i
            style={{ fontSize: "1.5rem", width: "1.5rem", height: "1.5rem" }}
            className="pi pi-step-forward-alt"
          ></i>
        </Button>{" "}
        <Button
          className="px-5"
          style={{ border: "none", background: "transparent" }}
        >
          <i
            style={{ fontSize: "1.5rem", width: "1.5rem", height: "1.5rem" }}
            className="pi pi-replay"
          ></i>
        </Button>{" "}
        <Button
          className="px-5"
          style={{ border: "none", background: "transparent" }}
          onClick={handleClickVolume}
        >
          <i
            style={{ fontSize: "1.5rem", width: "1.5rem", height: "1.5rem" }}
            className={volumeSound ? "pi pi-volume-up" : "pi  pi-volume-off"}
          ></i>
        </Button>
        {/* <Slider
          style={{ width: "14rem" }}
          value={volume}
          onChange={handleVolumeChange}
          showValue={false}
          className="mt-4"
        /> */}
      </div>
    </div>
  );
};

export default AudioSong;
