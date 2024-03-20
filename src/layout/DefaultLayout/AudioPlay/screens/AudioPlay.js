import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Link } from 'react-router-dom';
import { Slider } from 'primereact/slider';
import { useSelector } from 'react-redux';

const AudioPlay = () => {
      const audioRef = useRef();

      const [isPlaying, setIsPlaying] = useState(false);
      const [currentTime, setCurrentTime] = useState(0);
      const [duration, setDuration] = useState(0);
      const [progress, setProgress] = useState(0);
      const [volume, setVolume] = useState(50);
      const currentSong = useSelector((state) => state.currentSong);

      const toggleAudio = () => {
            if (isPlaying) {
                  audioRef.current.pause();
            } else {
                  audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
      }
      // useEffect(() => {
      //       const playAudio = async () => {
      //             try {
      //                   await audioRef.current.play();
      //             } catch (error) {
      //                   console.log(error);
      //             }
      //       };

      //       if (currentSong) {
      //             playAudio();
      //       }
      // }, [currentSong]);
      const onSliderChange = (e) => {
            const newTime = (e.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
      };

      useEffect(() => {
            if (currentSong) {
                  const audio = audioRef.current;
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

                  return () => {
                        audio.removeEventListener('timeupdate', updateProgress);
                        audio.removeEventListener('loadedmetadata', setAudioDuration);
                  };
            }
      }, []);

      const formatTime = (timeInSeconds) => {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = Math.floor(timeInSeconds % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };
      const [isClicked, setIsClicked] = useState(false);
      const [volumeSound, setVolumeSound] = useState(true)
      const [savedVolume, setSavedVolume] = useState(50);
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
      console.log(currentSong);
      return (
            <>
                  {currentSong && <div style={{ position: 'fixed', bottom: 0, background: '#171717' }} className='w-full h-6rem z-5' >
                        <audio ref={audioRef}>
                              <source src="https://firebasestorage.googleapis.com/v0/b/nodejs-9c5e8.appspot.com/o/songs%2F1Phut-Andiez-7632303.mp3?alt=media&token=4a162195-a4f6-4fa4-a095-12ec3561f0f1" type="audio/mpeg" />
                              Trình duyệt của bạn không hỗ trợ thẻ audio.
                        </audio>
                        <div className="grid align-items-center">
                              <div className="col-2 xl:col-3">
                                    <ul className='p-0 m-0   '>
                                          <div className='flex  gap-2 flex-column px-2'>
                                                <li className='grid align-items-center'>
                                                      <div className=" lg:col-2">
                                                            <img src={currentSong?.url} alt="" style={{ width: '70px', aspectRatio: '1', marginBottom: '5px', height: '70px' }} className='border-round-lg' />
                                                      </div>
                                                      <div className='lg:col-10 hidden xl:flex flex-column justify-content-center p-3 gap-2'>
                                                            <Link to="" className='text-white no-underline text-xl w-full'>{currentSong?.title}</Link>
                                                            <Link to="" className='text-white no-underline'>Thế Quyền</Link>
                                                      </div>
                                                </li>
                                          </div>
                                    </ul>
                              </div>
                              <div className="col-10 xl:col-2 pl-4 flex flex-column">
                                    <div className="xl:hidden flex" style={{ margin: "0 auto", marginBottom: "10px" }}>
                                          <Link to="" className='text-white no-underline text-xl'>{currentSong?.title}</Link>
                                    </div>
                                    <div className='flex gap-3' style={{ margin: '0 auto' }}>
                                          <Button
                                                icon="pi pi-heart"
                                                className={isClicked ? '' : 'p-button-outlined'}
                                                style={isClicked ? { background: '#03CE58', border: 'none', } : {}}
                                                onClick={handleClickHeart}
                                                rounded
                                          />
                                          <Button rounded style={{ background: '#03CE58', border: 'none', }} icon="pi pi-step-backward-alt" />
                                          <Button rounded style={{ background: '#03CE58', border: 'none', }} icon={isPlaying ? "pi pi-pause" : "pi pi-play"} onClick={toggleAudio} />
                                          <Button rounded style={{ background: '#03CE58', border: 'none', }} icon="pi pi-step-forward-alt" />
                                    </div>
                              </div>
                              <div className="xl:col-5 hidden xl:flex gap-3">
                                    <div className="flex justify-content-center align-items-center  gap-3" style={{ width: "70%" }}>
                                          <div> {formatTime(currentTime)}</div>
                                          <Slider style={{ width: '80%' }}
                                                value={progress}
                                                onChange={onSliderChange}
                                                onSlideEnd={() => setIsPlaying(true)}
                                          />
                                          <div> {formatTime(duration - currentTime)}</div>
                                    </div>
                                    <div className="flex align-items-center gap-3" style={{ width: "30%" }}>
                                          <Button rounded style={{ background: '#03CE58', border: 'none' }} icon={volumeSound ? 'pi pi-volume-up' : 'pi  pi-volume-off'}
                                                onClick={handleClickVolume} />
                                          <Slider style={{ width: '80%' }}
                                                value={volume}
                                                onChange={handleVolumeChange}
                                                showValue={false}
                                          />
                                    </div>
                              </div>
                              <div className="xl:col-2 hidden xl:flex gap-3 justify-content-center">
                                    <Button rounded style={{ background: '#03CE58', border: 'none' }} icon="pi pi-question-circle" />
                                    <Button rounded style={{ background: '#03CE58', border: 'none' }} icon="pi pi-sync" />
                                    <Button rounded style={{ background: '#03CE58', border: 'none' }} icon="pi pi-list" />
                              </div>

                        </div>
                  </div>}
            </>
      );
};

export default AudioPlay;
