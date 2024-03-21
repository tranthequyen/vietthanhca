import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Link } from 'react-router-dom';
import { Slider } from 'primereact/slider';
import { useSelector, useDispatch } from 'react-redux';
import { setSongState } from '@/redux/currentSong';

const AudioPlay = () => {
      const currentSong = useSelector((state) => state.currentSong.currentSong);
      const isPlaying = useSelector((state) => state.currentSong.isPlaying);
      const dispatch = useDispatch()
      const audioRef = useRef(null);


      const [currentTime, setCurrentTime] = useState(0);
      const [duration, setDuration] = useState(null);

      const togglePlay = () => {
            dispatch(setSongState(!isPlaying));
      }


      useEffect(() => {
            if (currentSong && isPlaying) {
                  audioRef.current.play();
                  setDuration(audioRef?.current?.duration)
            } else {
                  audioRef.current?.pause();
            }
            if (isPlaying && audioRef.current) {
                  const interval = setInterval(() => {
                        setCurrentTime(audioRef.current.currentTime);
                  }, 1000);
                  return () => clearInterval(interval);
            }
      }, [currentSong, isPlaying]);


      const formatTime = (seconds) => {
            seconds = Math.round(seconds);
            const minutes = Math.floor(seconds / 60);
            seconds %= 60;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };


      return (
            <>
                  {currentSong && <div style={{ position: 'fixed', bottom: 0, background: '#171717' }} className='w-full h-6rem z-5' >
                        <audio ref={audioRef} src={currentSong?.song} onLoadedMetadata={e => setDuration(e.target.duration)} />
                        <div> {formatTime(currentTime)}</div>
                        <Slider style={{ width: '80%' }} value={currentTime} max={duration} onChange={(e) => {
                              setCurrentTime(e.value);
                              if (audioRef.current) {

                                    audioRef.current.currentTime = e.value;
                              }
                        }} />

                        <div> {formatTime(audioRef?.current?.duration)}</div>
                        <div className="grid align-items-center">
                              <div className="col-2 xl:col-3">
                                    <ul className='p-0 m-0   '>
                                          <div className='flex  gap-2 flex-column px-2'>
                                                <li className='grid align-items-center'>
                                                      <div className=" lg:col-2">
                                                            <img src={currentSong?.url} alt="" style={{ width: '70px', aspectRatio: '1', marginBottom: '5px', height: '70px' }} className='border-round-lg' />
                                                      </div>
                                                      <div className='lg:col-10 hidden xl:flex flex-column justify-content-center p-3 gap-2'>
                                                            <Link to="" className='text-white no-underline text-xl w-full'>{currentSong?.name}</Link>
                                                            <Link to="" className='text-white no-underline'>{currentSong?.singer}</Link>
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
                                          {/* <Button
                                                icon="pi pi-heart"
                                                className={isClicked ? '' : 'p-button-outlined'}
                                                style={isClicked ? { background: '#03CE58', border: 'none', } : {}}
                                                onClick={handleClickHeart}
                                                rounded
                                          /> */}
                                          <Button rounded style={{ background: '#03CE58', border: 'none', }} icon="pi pi-step-backward-alt" />
                                          <Button
                                                rounded
                                                style={{ background: '#03CE58', border: 'none' }}
                                                icon={isPlaying ? "pi pi-pause" : "pi pi-play"}
                                                onClick={togglePlay}
                                          />
                                          <Button rounded style={{ background: '#03CE58', border: 'none', }} icon="pi pi-step-forward-alt" />
                                    </div>
                              </div>
                              <div className="xl:col-5 hidden xl:flex gap-3">
                                    <div className="flex justify-content-center align-items-center  gap-3" style={{ width: "70%" }}>
                                          {/* <div> {formatTime(currentTime)}</div> */}
                                          {/* <Slider style={{ width: '80%' }}
                                                value={progress}
                                                onChange={onSliderChange}
                                                // onSlideEnd={() => setIsPlaying(true)}
                                          /> */}
                                          {/* <div> {formatTime(duration - currentTime)}</div> */}
                                    </div>
                                    <div className="flex align-items-center gap-3" style={{ width: "30%" }}>
                                          {/* <Button rounded style={{ background: '#03CE58', border: 'none' }} icon={volumeSound ? 'pi pi-volume-up' : 'pi  pi-volume-off'}
                                                onClick={handleClickVolume} />
                                          <Slider style={{ width: '80%' }}
                                                value={volume}
                                                onChange={handleVolumeChange}
                                                showValue={false}
                                          /> */}
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
