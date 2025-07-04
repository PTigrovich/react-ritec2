import styles from './Website.module.scss';
import WebButton from '../../components/WebButton/WebButton';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react'; // Исправлен импорт useRef

function Website() {
    const navigate = useNavigate();
    const iframeRef = useRef(null);

    const handleClickMain = () => {
        navigate('/');
    };

    // Функции навигации для ОСНОВНОГО окна
    const goBack = () => {
        window.history.back();
    };

    const goForward = () => {
        window.history.forward();
    };

    const reloadPage = () => {
        window.location.reload();
    };

    // Функция для перезагрузки IFRAME (работает для любых сайтов)

    return (
        <div className={styles.background}>
            <BackButton className={`${styles.backButtonOverride}`} variant="blue" onClick={handleClickMain} />

            <iframe ref={iframeRef} className={styles.siteWrapper} src="https://ritek.lukoil.ru/ru" frameBorder="0" title="Официальный сайт РИТЭК">
                Ваш браузер не поддерживает фреймы.
            </iframe>

            <div className={styles.webButtons}>
                <WebButton onClick={goBack} variant="left" />
                <WebButton
                    className={styles.button}
                    onClick={reloadPage} // Используем перезагрузку iframe
                    variant="default"
                />
                <WebButton onClick={goForward} variant="right" />
            </div>
        </div>
    );
}
export default Website;
