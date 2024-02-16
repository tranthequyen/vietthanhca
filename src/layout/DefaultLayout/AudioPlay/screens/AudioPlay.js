import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Link } from 'react-router-dom';

const AudioPlay = () => {
      const audioRef = useRef();
      const progressBarContainerRef = useRef();
      const [isPlaying, setIsPlaying] = useState(false);
      const [currentTime, setCurrentTime] = useState(0);
      const [duration, setDuration] = useState(0);
      const [progress, setProgress] = useState(0);
      const toggleAudio = () => {
            if (isPlaying) {
                  audioRef.current.pause();
            } else {
                  audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
      }
      useEffect(() => {
            const audio = audioRef.current;
            const updateProgress = () => {
                  setProgress((audio.currentTime / audio.duration) * 100);
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
      }, []);
      const formatTime = (timeInSeconds) => {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = Math.floor(timeInSeconds % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };
      const handleProgressBarClick = (e) => {
            const rect = progressBarContainerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const clickedValue = x * audioRef.current.duration / rect.width;
            audioRef.current.currentTime = clickedValue;
      };
      const [isClicked, setIsClicked] = useState(false);

      const handleClick = () => {
            setIsClicked(!isClicked);
      }
      return (
            <div style={{ position: 'fixed', bottom: 0, background: '#989898' }} className='w-full h-6rem' >
                  <audio ref={audioRef}>
                        <source src="https://firebasestorage.googleapis.com/v0/b/nodejs-9c5e8.appspot.com/o/songs%2F1Phut-Andiez-7632303.mp3?alt=media&token=4a162195-a4f6-4fa4-a095-12ec3561f0f1" type="audio/mpeg" />
                        Trình duyệt của bạn không hỗ trợ thẻ audio.
                  </audio>
                  <div className="grid align-items-center">
                        <div className="col-3">
                              <ul className='p-0 m-0 flex  '>
                                    <div className='flex  gap-2 flex-column '>
                                          <li className='flex align-items-center px-3'>
                                                <img src="https://picsum.photos/200/300" alt="" width="80px" height="80px" className='border-round-lg' />
                                                <div className='flex flex-column justify-content-center p-3 gap-2'>
                                                      <Link to="" className='text-white no-underline text-xl'>Con đường Chúa đã đi</Link>
                                                      <Link to="" className='text-white no-underline'>Thế Quyền</Link>
                                                </div>
                                          </li>
                                    </div>
                              </ul>
                        </div>
                        <div className="col-2 ">
                              <div className='flex gap-3' >
                                    <Button
                                          icon="pi pi-heart"
                                          className={isClicked ? '' : 'p-button-outlined'}
                                          style={isClicked ? { background: '#03CE58', border: 'none' } : {}}
                                          onClick={handleClick}
                                    />
                                    <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-step-backward-alt" />
                                    <Button style={{ background: '#03CE58', border: 'none' }} icon={isPlaying ? "pi pi-pause" : "pi pi-play"} onClick={toggleAudio} />
                                    <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-step-forward-alt" />
                              </div>
                        </div>
                        <div className="col-5">
                              <div className="flex justify-content-center  gap-3"   >
                                    <div> {formatTime(currentTime)}</div>
                                    <div ref={progressBarContainerRef} onClick={handleProgressBarClick}>
                                          <ProgressBar value={progress} className='w-30rem h-1rem' showValue={false} />
                                    </div>
                                    <div> {formatTime(duration - currentTime)}</div>
                              </div>
                        </div>
                        <div className="col-2 flex gap-3">
                              <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-question-circle" />
                              <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-sync" />
                              <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-list" />
                        </div>
                  </div>
            </div>
      );
};

export default AudioPlay;
