import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './FirstLvlComp.module.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function FirstLvlComp({ item }) {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    if (!item) return null;

    return (
        <>
            <div className={styles.content}>
                <div className={styles.textColumn}>
                    <h2>{item.title1}</h2>
                    <h3>{item.title2}</h3>
                    <p>
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
                <div ref={sliderRef} className="keen-slider">
                    {item.image.map((image, index) => (
                        <div key={index} className="keen-slider__slide">
                            <img className={styles.image} src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>

                {loaded && instanceRef.current && (
                    <div className={styles.sliderControls}>
                        <button
                            onClick={e => {
                                e.stopPropagation();
                                instanceRef.current?.prev();
                            }}
                            disabled={currentSlide === 0}
                            className={styles.sliderArrow}
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={e => {
                                e.stopPropagation();
                                instanceRef.current?.next();
                            }}
                            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                            className={styles.sliderArrow}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default FirstLvlComp;
