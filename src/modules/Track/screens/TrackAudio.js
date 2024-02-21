import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Link } from 'react-router-dom';
import { Slider } from 'primereact/slider';
function TrackAudio({ handleSpin, spin }){
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
            handleSpin()
      }
      const handleClickAudio = () => {
            audioRef.current.currentTime = 0;
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
    return(
        <div className=" col-9 flex flex-column" style={{margin:'0 auto'}}>
            <h3 className="text-center text-xl pb-2" >Trong tình yêu mẹ - <strong style={{color:'green'}}>Diệu Hiền</strong></h3>
            <div className="flex justify-content-center align-items-center  gap-3"   >
            <audio ref={audioRef}>
                        <source src="https://firebasestorage.googleapis.com/v0/b/nodejs-9c5e8.appspot.com/o/songs%2F1Phut-Andiez-7632303.mp3?alt=media&token=4a162195-a4f6-4fa4-a095-12ec3561f0f1" type="audio/mpeg" />
                        Trình duyệt của bạn không hỗ trợ thẻ audio.
                  </audio>
                                <div style={{fontSize:'2vh'}}> 
                                {formatTime(currentTime)}</div>
                                    <Slider style={{ width: '100vh' }}
                                          value={progress}
                                          onChange={onSliderChange}
                                          onSlideEnd={() => setIsPlaying(true)}
                                    />
                                <div style={{fontSize:'2vh'}}> 
                                {formatTime(duration - currentTime)}</div>
            </div>
            <div className="flex flex-row" style={{margin:'0 auto'}}>
            <Button className='mt-3' style={{ background: 'none', border: 'none',height:'5vh'}}>
                  {isClicked?(
                  <span className="pi pi-heart-fill " style={{fontSize:'2.8vh',cursor:"pointer",color:'#03CE58'}} onClick={handleClickHeart}></span>
                  ):(
                  <span className="pi pi-heart " style={{fontSize:'2.8vh',cursor:"pointer"}} onClick={handleClickHeart}></span>
                  )}
            </Button>
            <Button className='mt-3' style={{ background: 'none', border: 'none',height:'5vh'}}>
                  <span className="pi pi-sort-alt" style={{fontSize:'2.8vh',transform: 'rotate(90deg)'}}></span>
            </Button>
            <Button className='mt-3' style={{ background: 'none', border: 'none',height:'5vh'}}>
                  <span className="pi pi-step-backward-alt" style={{fontSize:'2.8vh'}}></span>
            </Button>
            <Button className='mt-3' style={{ background: 'none', border: 'none',height:'5vh'}} onClick={toggleAudio}>
            {isPlaying ? (
                <span className='pi pi-pause' style={{fontSize:'2.8vh'}}></span>
            ) : (
                <span className='pi pi-play' style={{fontSize:'2.8vh'}}></span>
            )}
            </Button>
            <Button className='mt-3'style={{ background: 'none', border: 'none',height:'5vh'}}>
                  <span className="pi pi-step-forward-alt" style={{fontSize:'2.8vh'}}></span>
            </Button>
            
            <Button className='mt-3'style={{ background: 'none', border: 'none',height:'5vh'}} onClick={handleClickAudio}>
                  <span className="pi pi pi-sync" style={{fontSize:'2.8vh'}}></span>
            </Button>
            <Button className='mt-3' style={{ background: 'none', border: 'none',height:'5vh'}}  onClick={handleClickVolume}>
                {volumeSound ? (
                    <span className='pi pi-volume-up' style={{fontSize:'2.8vh'}}></span>
                ):(
                    <span className='pi pi-volume-off' style={{fontSize:'2.8vh'}}></span>
                )}

            </Button>
            <Slider
                style={{ width: '10rem',margin:'3.6vh 0 0 2vh' }}
                value={volume}
                onChange={handleVolumeChange}
                showValue={false}
            />
            </div>                            
        </div>
    )
}
export default TrackAudio