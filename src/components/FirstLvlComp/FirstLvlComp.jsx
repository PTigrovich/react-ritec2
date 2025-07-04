import styles from './FirstLvlComp.module.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function FirstLvlComp({ item }) {
    const navigate = useNavigate();

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
                        <Button
                            key={index}
                            className={styles.button}
                            onClick={() => navigate(button.path)}
                            text={button.text}
                            iconSrc={button.src} // Исправлено здесь
                        />
                    ))}
                </div>
            </div>

            <div className={styles.imageBlock}>
                <img className={styles.image} src={item.image.src} alt={item.image.alt} />
            </div>
        </>
    );
}

export default FirstLvlComp;