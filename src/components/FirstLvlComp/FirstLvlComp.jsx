import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './FirstLvlComp.module.scss';
import Button from '../Button/Button';
import { useNavigate, useParams } from 'react-router-dom';

function FirstLvlComp() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();

        // Проверяем, что получили массив
        if (!Array.isArray(jsonData)) {
          throw new Error('Invalid data format: expected array');
        }

        // Находим элемент по ID
        const item = jsonData.find((item) => item.id === parseInt(id));

        if (!item) {
          throw new Error(`Item with id ${id} not found`);
        }

        setCurrentItem(item);
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    setCurrentSlide(0);
    setSliderKey(Date.now());
    if (instanceRef.current) {
      instanceRef.current.destroy();
    }
  }, [currentItem, instanceRef]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!currentItem) return <div className={styles.notFound}>Page not found</div>;

  // Нормализуем images (на случай если это объект или массив)
  const images = Array.isArray(currentItem?.image) ? currentItem?.image : currentItem?.image?.src ? [currentItem?.image] : [];

  return (
    <>
      <div className={styles.content}>
        <div className={styles.textColumn} style={id === '1' ? { maxHeight: '83vh' } : {}}>
          <h2 style={id === '13' ? { color: '#d14a43' } : {}}>{currentItem?.title1}</h2>
          {currentItem?.title2 && <h3>{currentItem?.title2}</h3>}
          <div className={styles.mainP}>
            <div dangerouslySetInnerHTML={{ __html: currentItem?.description }} />
          </div>
          {currentItem?.buttons?.length > 0 && (
            <div className={styles.buttonColumn}>
              {currentItem?.buttons.map((button, index) => (
                <Button key={index} className={styles.button} onClick={() => navigate(button.path)} text={button.text} iconSrc={button.src} />
              ))}
            </div>
          )}
        </div>
      </div>

      {images.length > 0 && (
        <div className={styles.sliderContainer}>
          <div ref={sliderRef} className="keen-slider" key={sliderKey}>
            {images.map((image, index) => (
              <div key={index} className="keen-slider__slide">
                <img
                  className={styles.image}
                  src={image.src}
                  alt={image.alt || ''}
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && images.length > 1 && (
            <div className={styles.sliderControls}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current?.prev();
                }}
                disabled={currentSlide === 0}
                className={styles.sliderArrow}
                aria-label="Previous slide"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current?.next();
                }}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                className={styles.sliderArrow}
                aria-label="Next slide"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default FirstLvlComp;
