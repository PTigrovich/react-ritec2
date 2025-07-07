import styles from './Founder.module.scss';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { founderData } from '../../data/founder';

export default function Founder() {
  const [videoUrl, setVideoUrl] = useState('');
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Автоматически воспроизводим видео при открытии
  useEffect(() => {
    if (videoUrl && videoRef.current) {
      videoRef.current.play().catch((e) => {
        console.error('Playback failed, muting and retrying', e);
        videoRef.current.muted = true;
        return videoRef.current.play();
      });
    }
  }, [videoUrl]);

  const openVideoModal = (url) => {
    setVideoUrl(url);
  };

  const handleClose = () => {
    // остановка видео и закрытие модального окна
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setVideoUrl('');
  };

  const handleClickMain = () => {
    navigate('/');
  };

  return (
    <div className={styles.background}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img className={styles.itemImage} src={founderData.image.src} alt={founderData.image.alt} />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.firstTitle}>{founderData.title}</h2>
          <h3 className={styles.secTitle}>{founderData.subtitle}</h3>
          <p className={styles.itemText}>{founderData.description}</p>
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <Button text="СМОТРЕТЬ ФИЛЬМ" className={styles.mediaButton} onClick={() => openVideoModal('/videos/video.mp4')} iconSrc="/images/videoButton.png" />
        <Button
          text="СМОТРЕТЬ ИНТЕРВЬЮ"
          className={styles.mediaButton}
          onClick={() => openVideoModal('/videos/interview.mp4')}
          iconSrc="/images/interviewButton.png"
        />
      </div>

      {/* Модальное окно для видео */}
      {videoUrl && (
        <div className={styles.modalOverlay}>
          <BackButton className={styles.backButton} onClick={handleClose} />
          <video ref={videoRef} controls autoPlay className={styles.modalVideo} onEnded={handleClose} onError={(e) => console.error('Video error:', e)}>
            <source src={videoUrl} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      )}

      <BackButton onClick={handleClickMain} />
    </div>
  );
}
