import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Link } from "react-router-dom";
import { Slider } from "primereact/slider";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setSongState } from "@/redux/currentSong";
function TrackAudio({ handleSpin, spin, data, currentTimeSong }) {
  const audioRef = useRef();
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.currentSong.isPlaying);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const allSong = useSelector((state) => state.allSong);
  const volumeSong = useSelector((state) => state.currentSong.volume);
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
  }, [data, isPlaying]);

  useEffect(() => {
    audioRef.current.currentTime = currentTimeSong;
    audioRef.current.currentTime = volumeSong / 100;
  }, [currentTimeSong]);

  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0);
  const handleClickAudio = () => {
    audioRef.current.currentTime = 0;
  };

  const onSliderChange = (e) => {
    const newTime = (e.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  useEffect(() => {
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
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const [isClicked, setIsClicked] = useState(false);
  const [volumeSound, setVolumeSound] = useState(true);
  const [savedVolume, setSavedVolume] = useState(50);
  const handleClickHeart = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [audioRef.current?.volume]);

  const handleClickVolume = () => {
    setVolumeSound(!volumeSound);
    if (!volumeSound) {
      setVolume(savedVolume);
    } else {
      setSavedVolume(volume);
      setVolume(0);
    }
  };
  const handleVolumeChange = (e) => {
    const newVolume = e.value / 100;
    audioRef.current.volume = newVolume;
    setVolume(e.value);
  };
  const handleNextSong = () => { };

  const handlePrevSong = () => { };
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
        <Button className="audio_button " icon={isClicked ? "pi pi-heart-fill" :
          "pi pi-heart"}
          onClick={handleClickHeart}
        />

        <Button className="audio_button" icon="pi pi-sort-alt"
          style={{ transform: "rotate(90deg)" }}

        />
        <Button
          className="audio_button"
          icon="pi pi-step-backward-alt"
          onClick={handlePrevSong}
        />

        <Button className="audio_button" onClick={toggleAudio} icon={isPlaying ? " pi pi-pause" : "pi pi-play"} />


        <Button
          className="audio_button"
          icon="pi pi-step-forward-alt"
          onClick={handleNextSong}
        />

        <Button className="audio_button" onClick={handleClickAudio}>
          <span className="pi pi pi-sync"></span>
        </Button>
        <Button className="audio_button" onClick={handleClickVolume} icon={volumeSound ? "pi pi-volume-up" : "pi pi-volume-off"} />
        <Slider
          style={{
            margin: "20px 0 0 2vh",
            aspectRatio: "2",
            position: "absolute",
          }}
          orientation="vertical"
          value={volume}
          onChange={handleVolumeChange}
          showValue={false}
          className="volume_bar"
        />
      </div>
    </div>
  );
}
export default TrackAudio;
