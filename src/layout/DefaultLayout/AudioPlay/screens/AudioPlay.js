import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Link, useNavigate } from "react-router-dom";
import { Slider } from "primereact/slider";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentSong,
  setCurrentTimeSong,
  setIsRandom,
  setIsReplay,
  setIsVolume,
  setSongState,
  setVolumneSong,
} from "@/redux/currentSong";
import { ButtonAudio, ButtonRandom } from "@/components/ButtonDetail";
const AudioPlay = () => {
  const currentSong = useSelector((state) => state.currentSong.currentSong);
  const isPlaying = useSelector((state) => state.currentSong.isPlaying);
  const isActive = useSelector((state) => state.currentSong.isActive);
  const isReplay = useSelector((state) => state.currentSong.isReplay);
  const allSong = useSelector((state) => state.allSong);
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const [volume, setVolume] = useState(50);
  const [isClicked, setIsClicked] = useState(false);
  const [volumeSound, setVolumeSound] = useState(true)
  const [savedVolume, setSavedVolume] = useState(50);
  const isRandom = useSelector((state) => state.currentSong.isRandom);

  const togglePlay = () => {
    dispatch(setSongState(!isPlaying));
  };
  const handleRandom = () => {
    let newRandom = !isRandom;
    dispatch(setIsRandom(newRandom));
    if (newRandom) {
      let randomIndex = Math.floor(Math.random() * allSong.length);
      dispatch(setCurrentSong(allSong[randomIndex]));
    }
  };

  const handleSongEnded = () => {
    if (isReplay) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else if (isRandom) {
      let randomIndex = Math.floor(Math.random() * allSong.length);
      dispatch(setCurrentSong(allSong[randomIndex]));
    } else {
      handleNextSong();
    }
  };
  useEffect(() => {
    if (currentSong && isPlaying) {
      audioRef.current.play();
      setDuration(audioRef?.current?.duration);
    } else {
      audioRef.current?.pause();
      let newIsActive = !isActive;
      dispatch(setSongState(newIsActive));
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
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('loadedmetadata', setAudioDuration);
      audio.addEventListener('ended', handleSongEnded);

      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('loadedmetadata', setAudioDuration);
        audio.removeEventListener('ended', handleSongEnded);

      };
    }
  }, [currentSong, isPlaying]);

  const handleReplaySong = () => {
    let newIsReplay = !isReplay;
    dispatch(setIsReplay(newIsReplay));
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

  const onSliderChange = (e) => {
    const newTime = (e.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  const handleClickHeart = () => {
    setIsClicked(!isClicked);
  }
  useEffect(() => {
    if (currentSong) {
      audioRef.current.volume = volume / 100;
    }
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


  const handleClickDetail = () => {
    dispatch(setCurrentTimeSong(audioRef.current.currentTime));
    dispatch(setVolumneSong(volume));
    dispatch(setCurrentSong(currentSong))
    dispatch(setIsReplay(isReplay))
    navigate(`/song/detail/${currentSong._id}`);
    if (audioRef.current.volume === 0) {
      dispatch(setIsVolume(false))
    } else {
      dispatch(setIsVolume(true))
    }
    audioRef.current?.pause();
  }
  const formatTime = (seconds) => {
    seconds = Math.round(seconds);
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <>
      {currentSong && (
        <div
          style={{ position: "fixed", bottom: 0, background: "#171717" }}
          className="w-full h-6rem z-5"
        >
          <audio
            ref={audioRef}
            src={currentSong?.song}
            onLoadedMetadata={(e) => setDuration(e.target.duration)}
          />

          <div className="grid align-items-center">
            <div className="col-2 xl:col-3">
              <ul className="p-0 m-0   ">
                <div className="flex  gap-2 flex-column px-2">
                  <li className="grid align-items-center">
                    <div className=" lg:col-2">
                      <img
                        src={currentSong?.url}
                        alt=""
                        style={{
                          width: "70px",
                          aspectRatio: "1",
                          marginBottom: "5px",
                          height: "70px",
                        }}
                        className="border-round-lg"
                      />
                    </div>
                    <div className="lg:col-10 hidden xl:flex flex-column justify-content-center p-3 gap-2">
                      <Link
                        to=""
                        className="text-white no-underline text-xl w-full"
                      >
                        {currentSong?.name}
                      </Link>
                      <Link to="" className="text-white no-underline">
                        {currentSong?.singer}
                      </Link>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
            <div className="col-10 xl:col-2 pl-4 flex flex-column">
              <div
                className="xl:hidden flex"
                style={{ margin: "0 auto", marginBottom: "10px" }}
              >
                <Link to="" className="text-white no-underline text-xl">
                  {currentSong?.title}
                </Link>
              </div>
              <div className="flex gap-3" style={{ margin: "0 auto" }}>
                {/* <Button
                                                icon="pi pi-heart"
                                                className={isClicked ? '' : 'p-button-outlined'}
                                                style={isClicked ? { background: '#03CE58', border: 'none', } : {}}
                                                onClick={handleClickHeart}
                                                rounded
                                          /> */}
                <ButtonAudio
                  icon="pi pi-step-backward-alt"
                  onClick={handlePrevSong}
                />
                <ButtonAudio
                  icon={isPlaying ? "pi pi-pause" : "pi pi-play"}
                  onClick={togglePlay}
                />
                <ButtonAudio
                  icon="pi pi-step-forward-alt"
                  onClick={handleNextSong}
                />
              </div>
            </div>
            <div className="xl:col-5 hidden xl:flex gap-3">
              <div
                className="flex justify-content-center align-items-center  gap-3"
                style={{ width: "70%" }}
              >
                <div> {formatTime(currentTime)}</div>
                <Slider style={{ width: '80%' }}
                  value={progress}
                  onChange={onSliderChange}
                />

                <div> {formatTime(audioRef?.current?.duration)}</div>
              </div>
              <div
                className="flex align-items-center gap-3"
                style={{ width: "30%" }}
              >
                <ButtonAudio
                  rounded
                  icon={volumeSound ? "pi  pi-volume-up" : "pi pi-volume-off"}
                  onClick={handleClickVolume}
                />
                <Slider
                  style={{ width: "80%" }}
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
            <div className="xl:col-2 hidden xl:flex gap-3 justify-content-center">
              <ButtonRandom
                className={isRandom ? "border-3 border-white active_replay" : 'border-none'}
                onClick={handleRandom}
              />
              <Button
                className={isReplay ? "border-3 border-white active_replay" : 'border-none'}
                icon={!isReplay ? "pi pi-sync" : "pi pi-sync pi-spin"}
                onClick={handleReplaySong}
                style={{ background: "#03CE58" }}
                rounded
              />
              <ButtonAudio
                icon="pi pi-list"
              />
              <ButtonAudio
                icon="pi pi-info-circle"
                onClick={handleClickDetail}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioPlay;
