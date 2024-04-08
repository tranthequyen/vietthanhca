import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Slider } from "primereact/slider";
import { useDispatch, useSelector } from "react-redux";
import { setIsVolume, setSongState } from "@/redux/currentSong";
function TrackAudio({ handleSpin, spin, data, currentTimeSong, volumeSong }) {
  const audioRef = useRef();
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.currentSong.isPlaying);
  const isVolume = useSelector((state) => state.currentSong.isVolume);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(volumeSong ? volumeSong : 50);
  const [savedVolume, setSavedVolume] = useState();
  const toggleAudio = () => {
    let newIsPlaying = isPlaying;
    dispatch(setSongState(!newIsPlaying));
  };
  useEffect(() => {
    if (data && isPlaying) {
      handleSpin(true);
      audioRef.current.play();
      setDuration(audioRef?.current?.duration);
    } else if (data && !isPlaying) {
      handleSpin(false);
      audioRef.current?.pause();
    }
    const audio = audioRef.current;
    const updateProgress = () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      setProgress(progress);
      setCurrentTime(audio.currentTime);
    };
    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [data, isPlaying]);

  useEffect(() => {
    audioRef.current.currentTime = currentTimeSong;
    audioRef.current.volume = volumeSong / 100;
  }, [currentTimeSong, volumeSong]);

  const handleClickVolume = () => {
    let newIsVolume = isVolume;
    setSavedVolume(audioRef.current.volume);
    dispatch(setIsVolume(!newIsVolume));
    if (!isVolume) {
      setVolume(savedVolume);
    } else {
      setSavedVolume(volume);
      setVolume(0);
    }
  };
  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);
  const handleClickAudio = () => {
    audioRef.current.currentTime = 0;
  };
  const onSliderChange = (e) => {
    const newTime = (e.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClickHeart = () => {
    setIsClicked(!isClicked);
  };
  const handleVolumeChange = (e) => {
    const newVolume = e.value / 100;
    audioRef.current.volume = newVolume;
    setVolume(e.value);
  };

  const handleNextSong = () => {};

  const handlePrevSong = () => {};
  return (
    <div className=" col-12 flex flex-column" style={{ margin: "0 auto" }}>
      <h3 className="text-center text-xl pb-2">
        {data.name} - <strong style={{ color: "green" }}>{data.singer}</strong>
      </h3>
      <div className="flex justify-content-center align-items-center  gap-3">
        <audio ref={audioRef} src={data.song}></audio>
        <div style={{ fontSize: "2vh" }}>{formatTime(currentTime)}</div>
        <Slider
          style={{ width: "60%" }}
          value={progress}
          onChange={onSliderChange}
          onSlideEnd={() => dispatch(setSongState(true))}
        />
        <div style={{ fontSize: "2vh" }}>{formatTime(duration)}</div>
      </div>
      <div
        className="flex flex-row "
        style={{ margin: "0 auto", marginTop: "10px", position: "relative" }}
      >
        <Button
          className="audio_button "
          icon={isClicked ? "pi pi-heart-fill" : "pi pi-heart"}
          onClick={handleClickHeart}
        />

        <Button
          className="audio_button"
          icon="pi pi-sort-alt"
          style={{ transform: "rotate(90deg)" }}
        />
        <Button
          className="audio_button"
          icon="pi pi-step-backward-alt"
          onClick={handlePrevSong}
        />

        <Button
          className="audio_button"
          onClick={toggleAudio}
          icon={isPlaying ? " pi pi-pause" : "pi pi-play"}
        />

        <Button
          className="audio_button"
          icon="pi pi-step-forward-alt"
          onClick={handleNextSong}
        />

        <Button className="audio_button" onClick={handleClickAudio}>
          <span className="pi pi pi-sync"></span>
        </Button>
        <Button
          className="audio_button"
          onClick={handleClickVolume}
          icon={isVolume ? "pi pi-volume-up" : "pi pi-volume-off"}
        />
        <Slider
          value={volume}
          style={{
            margin: "20px 0 0 2vh",
            aspectRatio: "2",
            position: "absolute",
          }}
          orientation="vertical"
          onChange={handleVolumeChange}
          showValue={false}
          className="volume_bar"
        />
      </div>
    </div>
  );
}
export default TrackAudio;
