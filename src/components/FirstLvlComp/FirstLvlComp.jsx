import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import styles from './FirstLvlComp.module.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';

function FirstLvlComp({ item }) {
	 const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderKey, setSliderKey] = useState(Date.now());

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
        destroyed() {
            setLoaded(false);
        },
    });

	 useEffect(() => {
         // При смене элемента полностью пересоздаем слайдер
         setCurrentSlide(0);
         setSliderKey(Date.now()); // Новый ключ заставит React пересоздать слайдер

         // Уничтожаем старый экземпляр слайдера
         if (instanceRef.current) {
             instanceRef.current.destroy();
         }
     }, [item]);

    if (!item) return null;

    return (
        <>
            <div className={styles.content}>
                <div className={styles.textColumn}>
                    <h2>{item.title1}</h2>
                    <h3>{item.title2}</h3>
                    <p className={styles.mainP}>
                        <span className={styles.invSpace}>g </span>
                        {item.description}
                    </p>
                </div>

                <div className={styles.buttonColumn}>
                    {item.buttons.map((button, index) => (
                        <Button key={index} className={styles.button} onClick={() => navigate(button.path)} text={button.text} iconSrc={button.src} />
                    ))}
                </div>
            </div>

            <div className={styles.sliderContainer}>
                <div ref={sliderRef} 
					 		className="keen-slider" 
							key={sliderKey}>
                    {item.image.map((image, index) => (
                        <div key={index} className="keen-slider__slide">
                            <img className={styles.image} src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>

                {loaded && instanceRef.current && item.image?.length > 1 && (
                    <div className={styles.sliderControls}>
                        <button
                            onClick={e => {
                                e.stopPropagation();
                                instanceRef.current?.prev();
                            }}
                            disabled={currentSlide === 0}
                            className={styles.sliderArrow}
                        />

                        <button
                            onClick={e => {
                                e.stopPropagation();
                                instanceRef.current?.next();
                            }}
                            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                            className={styles.sliderArrow}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default FirstLvlComp;
