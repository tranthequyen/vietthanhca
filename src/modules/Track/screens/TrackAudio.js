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
  const [save, setSave] = useState(null);
  const [duration, setDuration] = useState(0);
  const allSong = useSelector((state) => state.allSong);

  const toggleAudio = () => {
    let newIsPlaying = isPlaying;
    dispatch(setSongState(!newIsPlaying));
    handleSpin();
    setSave(audioRef.current.currentTime);
    console.log(save);
  };
  useEffect(() => {
    if (data && isPlaying) {
      audioRef.current.play();
      setDuration(audioRef?.current?.duration);
    } else if (data && !isPlaying) {
      audioRef.current?.pause();
    }
  }, [data, isPlaying]);

  useEffect(() => {
    audioRef.current.currentTime = currentTimeSong;
  }, [currentTimeSong]);

  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
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
    audioRef.current.volume = volume / 100;
  }, [volume]);

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
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
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
        <Button className="audio_button">
          {isClicked ? (
            <span
              className="pi pi-heart-fill "
              style={{ cursor: "pointer", color: "#03CE58" }}
              onClick={handleClickHeart}
            ></span>
          ) : (
            <span
              className="pi pi-heart "
              style={{ cursor: "pointer" }}
              onClick={handleClickHeart}
            ></span>
          )}
        </Button>
        <Button className="audio_button">
          <span
            className="pi pi-sort-alt"
            style={{ transform: "rotate(90deg)" }}
          ></span>
        </Button>
        <Button
          className="audio_button"
          icon="pi pi-step-backward-alt"
          onClick={handlePrevSong}
        />

        <Button className="audio_button" onClick={toggleAudio}>
          {isPlaying ? (
            <span className="pi pi-pause"></span>
          ) : (
            <span className="pi pi-play"></span>
          )}
        </Button>
        <Button
          className="audio_button"
          icon="pi pi-step-forward-alt"
          onClick={handleNextSong}
        />

        <Button className="audio_button" onClick={handleClickAudio}>
          <span className="pi pi pi-sync"></span>
        </Button>
        <Button className="audio_button" onClick={handleClickVolume}>
          {volumeSound ? (
            <span className="pi pi-volume-up"></span>
          ) : (
            <span className="pi pi-volume-off"></span>
          )}
        </Button>
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
