import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Link } from "react-router-dom";
import { Slider } from "primereact/slider";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setSongState } from "@/redux/currentSong";
function TrackAudio({
  handleSpin,
  spin,
  data,
  currentTimeSong,
  currentVolume,
  isVolume,
}) {
  const audioRef = useRef();
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.currentSong.currentSong);
  const isPlaying = useSelector((state) => state.currentSong.isPlaying);
  const [currentTime, setCurrentTime] = useState(0);
  const [save, setSave] = useState(null);
  const [duration, setDuration] = useState(0);
  const allSong = useSelector((state) => state.allSong);
  const [isReplay, setIsReplay] = useState(false);
  const handleClickReplay = () => {
    setIsReplay(!isReplay);
  };
  const toggleAudio = () => {
    let newIsPlaying = isPlaying;
    dispatch(setSongState(!newIsPlaying));
    setSave(audioRef.current.currentTime);
    console.log(save);
  };

  useEffect(() => {
    if (currentSong && isPlaying) {
      handleSpin(true);
      audioRef.current.play();
      setDuration(audioRef?.current?.duration);
    } else if (currentSong && !isPlaying) {
      handleSpin(false);
      audioRef.current?.pause();
    }
  }, [currentSong, isPlaying]);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(currentVolume * 100);
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
  useEffect(() => {
    if (
      isReplay &&
      audioRef.current?.currentTime == audioRef.current?.duration
    ) {
      handleClickAudio();
      toggleAudio();
    }
    if (isReplay && audioRef.current?.currentTime == 0) {
      toggleAudio();
    }
    if (
      !isReplay &&
      audioRef.current?.currentTime == audioRef.current?.duration
    ) {
      toggleAudio();
    }
  }, [isReplay, audioRef.current?.currentTime]);
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const [isClicked, setIsClicked] = useState(false);
  const [volumeSound, setVolumeSound] = useState(isVolume);
  const [savedVolume, setSavedVolume] = useState(currentVolume * 100);
  const handleClickHeart = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    audioRef.current.currentTime = currentTimeSong;
    audioRef.current.currentVolume = currentVolume;
  }, [currentTimeSong, currentVolume]);
  console.log(volume);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef.current?.volume]);

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
    setVolumeSound(true);
    if (e.value === 0) {
      setVolume(0);
      setVolumeSound(false);
    }
  };
  const handlePrevSong = () => {
    let currentIndex = allSong.findIndex(
      (song) => song._id === currentSong._id
    );

    if (currentIndex > 0) {
      dispatch(setCurrentSong(allSong[currentIndex - 1]));
    } else if (currentIndex === 0) {
      dispatch(setCurrentSong(allSong[allSong.length - 1]));
    }
  };
  const handleNextSong = () => {
    let currentIndex = allSong.findIndex(
      (song) => song._id === currentSong._id
    );

    if (currentIndex >= 0 && currentIndex < allSong.length - 1) {
      dispatch(setCurrentSong(allSong[currentIndex + 1]));
    } else if (currentIndex === allSong.length - 1) {
      dispatch(setCurrentSong(allSong[0]));
    }
  };
  return (
    <div className=" col-12 flex flex-column" style={{ margin: "0 auto" }}>
      <h3 className="text-center text-xl pb-2">
        {currentSong?.name} -{" "}
        <strong style={{ color: "green" }}>{currentSong?.singer}</strong>
      </h3>
      <div className="flex justify-content-center align-items-center  gap-3">
        <audio ref={audioRef} src={currentSong?.song}></audio>
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
        style={{ margin: "0 auto", marginTop: "2vh", position: "relative" }}
      >
        <Button className="audio_button mx-4">
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
        <Button className="audio_button mx-4">
          <span
            className="pi pi-sort-alt"
            style={{ transform: "rotate(90deg)" }}
          ></span>
        </Button>
        <Button
          className="audio_button mx-4"
          icon="pi pi-step-backward-alt"
          onClick={handlePrevSong}
        />

        <Button className="audio_button mx-4" onClick={toggleAudio}>
          {isPlaying ? (
            <span className="pi pi-pause"></span>
          ) : (
            <span className="pi pi-play"></span>
          )}
        </Button>
        <Button
          className="audio_button mx-4"
          icon="pi pi-step-forward-alt"
          onClick={handleNextSong}
        />

        {isReplay ? (
          <Button className="audio_button mx-4" onClick={handleClickReplay}>
            <span className="pi pi-sync " style={{ color: "#21c05c" }}></span>
          </Button>
        ) : (
          <Button className="audio_button mx-4" onClick={handleClickReplay}>
            <span className="pi pi pi-sync"></span>
          </Button>
        )}
        <Button className="audio_button mx-4" onClick={handleClickVolume}>
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
      {isReplay ? (
        <div className="flex flex-row pt-4">
          <span style={{ margin: "0 auto" }}>Bạn đang ở chế độ replay</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default TrackAudio;
