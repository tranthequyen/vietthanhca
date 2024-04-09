import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Slider } from "primereact/slider";
import { useDispatch, useSelector } from "react-redux";
import currentSong, {
  setCurrentSong,
  setIsReplay,
  setIsVolume,
  setSongState,
} from "@/redux/currentSong";
import { useNavigate } from "react-router-dom";
import { useGetParams } from "@/hook/useGetParams";
import { useLocation } from "react-router-dom";
function TrackAudio({
  handleSpin,
  data,
  currentTimeSong,
  volumeSong,
  indexSong,
  allSong,
}) {
  const audioRef = useRef();
  const params = useGetParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isPlaying = useSelector((state) => state.currentSong.isPlaying);
  const isVolume = useSelector((state) => state.currentSong.isVolume);
  const [isVolumeV2, setIsVolumeV2] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(volumeSong ? volumeSong : 50);
  const [savedVolume, setSavedVolume] = useState();
  const currentSong = useSelector((state) => state.currentSong.currentSong);
  const isReplay = useSelector((state) => state.currentSong.isReplay);

  const toggleAudio = () => {
    let newIsPlaying = isPlaying;
    dispatch(setSongState(!newIsPlaying));
  };
  useEffect(() => {
    if (data) {
      dispatch(setCurrentSong(data));
    }
  }, [data]);

  const handleSongEnded = () => {
    if (isReplay) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleNextSong();
    }
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
    const audio = audioRef.current;
    if (audio) {
      const updateProgress = () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        setProgress(progress);
        setCurrentTime(audio.currentTime);
      };
      const setAudioDuration = () => {
        setDuration(audio.duration);
      };
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", setAudioDuration);
      audio.addEventListener("ended", handleSongEnded);

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", setAudioDuration);
        audio.removeEventListener("ended", handleSongEnded);
      };
    }
  }, [currentSong, isPlaying]);
  useEffect(() => {
    if (currentTimeSong && volumeSong) {
      audioRef.current.currentTime = currentTimeSong;
      audioRef.current.volume = volumeSong / 100;
    }
  }, []);
  const handleClickVolume = () => {
    if (isVolume) {
      let newIsVolume = isVolume;
      setSavedVolume(audioRef.current.volume);
      dispatch(setIsVolume(!newIsVolume));
      if (!isVolume) {
        setVolume(savedVolume);
      } else {
        setSavedVolume(volume);
        setVolume(0);
      }
    } else {
      setIsVolumeV2(!isVolumeV2);
      setSavedVolume(audioRef.current.volume);
      if (!isVolumeV2) {
        setVolume(savedVolume);
      } else {
        setSavedVolume(volume);
        setVolume(0);
      }
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
  const handleReplaySong = () => {
    let newIsReplay = !isReplay;
    dispatch(setIsReplay(newIsReplay));
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

        <Button
          className={`audio_button ${isReplay ? "is-replay" : ""}`}
          icon={!isReplay ? "pi pi-sync" : "pi pi-sync pi-spin"}
          onClick={handleReplaySong}
        />

        <Button
          className="audio_button"
          onClick={handleClickVolume}
          icon={
            isVolume != null
              ? isVolume
                ? "pi pi-volume-up"
                : "pi pi-volume-off"
              : isVolumeV2
              ? "pi pi-volume-up"
              : "pi pi-volume-off"
          }
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
          className="volume_bar"
        />
      </div>
    </div>
  );
}
export default TrackAudio;
