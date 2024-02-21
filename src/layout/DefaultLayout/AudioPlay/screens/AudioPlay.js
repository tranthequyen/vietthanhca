import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Link } from 'react-router-dom';
import { Slider } from 'primereact/slider';

const AudioPlay = () => {
      const audioRef = useRef();

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
      }

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
      const [isClicked, setIsClicked] = useState(false);
      const [volumeSound, setVolumeSound] = useState(true)
      const [savedVolume, setSavedVolume] = useState(50);
      const handleClickHeart = () => {
            setIsClicked(!isClicked);
      }
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
            <div style={{ position: 'fixed', bottom: 0, background: '#171717' }} className='w-full h-6rem z-5' >
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
                                          onClick={handleClickHeart}
                                    />
                                    <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-step-backward-alt" />
                                    <Button style={{ background: '#03CE58', border: 'none' }} icon={isPlaying ? "pi pi-pause" : "pi pi-play"} onClick={toggleAudio} />
                                    <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-step-forward-alt" />
                              </div>
                        </div>
                        <div className="col-5 flex gap-3">
                              <div className="flex justify-content-center align-items-center  gap-3"   >
                                    <div> {formatTime(currentTime)}</div>
                                    <Slider style={{ width: '25rem' }}
                                          value={progress}
                                          onChange={onSliderChange}
                                          onSlideEnd={() => setIsPlaying(true)}
                                    />
                                    <div> {formatTime(duration - currentTime)}</div>
                              </div>
                              <div className="flex align-items-center gap-3">
                                    <Button style={{ background: '#03CE58', border: 'none' }} icon={volumeSound ? 'pi pi-volume-up' : 'pi  pi-volume-off'}
                                          onClick={handleClickVolume} />
                                    <Slider style={{ width: '14rem' }}
                                          value={volume}
                                          onChange={handleVolumeChange}
                                          showValue={false}
                                    />
                              </div>
                        </div>
                        <div className="col-2 flex gap-3 justify-content-center">
                              <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-question-circle" />
                              <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-sync" />
                              <Button style={{ background: '#03CE58', border: 'none' }} icon="pi pi-list" />
                        </div>

                  </div>
            </div>
      );
};

export default AudioPlay;
