import styles from './Founder.module.scss';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

function Founder() {
    const [videoUrl, setVideoUrl] = useState('');
    const videoRef = useRef(null);
    const navigate = useNavigate();

    // Добавляем обработчик изменения полноэкранного режима
    useEffect(() => {
        // Объявляем обработчик прямо в useEffect
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                setVideoUrl('');
            }
        };

        // Добавляем обработчик
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        // Функция очистки - удаляем обработчик
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    const openFullscreenVideo = async url => {
        setVideoUrl(url);

        try {
            await videoRef.current?.play();
            await videoRef.current?.requestFullscreen();

            // Принудительно поднимаем кнопку после входа в полноэкранный режим
            const btn = document.querySelector(`.${styles.videoBackButton}`);
            if (btn) btn.style.zIndex = '2147483647';
        } catch (e) {
            console.error('Error:', e);
            videoRef.current.muted = true;
            await videoRef.current?.play();
            await videoRef.current?.requestFullscreen();
        }
    };
    const handleClose = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        setVideoUrl('');
    };

    const handleClickMain = () => {
        navigate('/');
    };

    return (
        <div className={styles.background}>
            <div className={styles.contentWrapper}>
                <div className={styles.imageConteiner}>
                    <img className={styles.itemImage} src="/images/founder-photo.jpg" alt="основатель" />
                </div>
                <div className={styles.textWrapper}>
                    <h2 className={styles.firstTitle}>Грайфер Валерий Исаакович (1929-2020)</h2>
                    <h3 className={styles.secTitle}>Основатель Российской инновационной топливно-энергетической компании (РИТЭК)</h3>
                    <p className={styles.itemText}>
                        Выдающийся нефтяник,научный и государственный деятель, профессор, академик Академии горных наук и Международной топливно-энергетической
                        академии, автор около 100 научных работ, 40 изобретений, Лауреат Ленинской премии и премии Правительства РФ, Заслуженный работник ПАО
                        «ЛУКОИЛ».
                        <br />
                        Валерий Исаакович оставил яркий след в истории ТЭК России, в сердцах тех, кому посчастливилось работать и общаться с ним.
                        <br />
                        В 1952 г. окончил Московский нефтяной институт им. И. М. Губкина по специальности «Разработка нефтяных и газовых месторождений», после
                        чего работал на предприятиях производственного объединения «Татнефть». Прошел путь от помощника мастера по добыче нефти до главного
                        инженера - заместителя начальника объединения.
                        <br />
                        С 1972-го по 1985 год работал в Министерстве нефтяной промышленности СССР в должности начальника планово-экономического управления.
                        <br />
                        В 1985-1990 гг. — заместитель министра нефтяной промышленности СССР, начальник «Главтюменнефтегаза» — крупнейшего производственного
                        объединения западносибирского нефтегазового комплекса. 1990-1991 гг. — заместитель председателя Научно-технического совета Министерства.
                        <br />
                        В 1992 году — исполнительный директор по научно-техническому прогрессу и экологии компании «ЛУКОЙЛ». С 1992 по 12 января 2010 года —
                        генеральный директор ОАО «РИТЭК» (в настоящее время ООО «РИТЭК»).
                        <br />
                        Многие годы — Председатель Советов директоров ПАО «ЛУКОЙЛ» и ООО «РИТЭК». <br />
                        Образец высочайшего профессионализма, всю жизнь он искренне служил нефтяному делу, своим примером доказывая, что нет ничего невозможного
                        для тех, кто стремится к познанию нового, освоению неизведанного, созданию и внедрению уникального опыта.
                        <br />
                        РИТЭК стал его детищем, проектом, устремленным в будущее — показательным для всех, кто работает не одним днем, а на перспективу. И
                        сегодня сотрудники коллектива любое решение принимают после ответа на вопрос: «А что на это сказал бы Валерий Исаакович?».
                        <br />
                        При этом для него всегда были важны не только производственные достижения, но люди, их жизни, мечты, благополучие.
                        <br />
                        Валерий Исаакович стал ориентиром для нынешних и будущих поколений нефтяников. Для всех нас.
                    </p>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <Button
                    text={'СМОТРЕТЬ ФИЛЬМ'}
                    className={styles.mediaButton}
                    onClick={() => openFullscreenVideo('/videos/video.mp4')} // Исправлен путь (убрана лишняя 's')
                    iconSrc={'/images/videoButton.png'}
                />
                <Button
                    text={'СМОТРЕТЬ ИНТЕРВЬЮ'}
                    className={styles.mediaButton}
                    onClick={() => openFullscreenVideo('/videos/interview.mp4')}
                    iconSrc={'/images/interviewButton.png'}
                />
            </div>

            {videoUrl && (
                <video
                    className={styles.videoElement}
                    ref={videoRef}
                    controls
                    autoPlay
                    style={{ position: 'fixed', top: '-100vh' }} // Альтернатива display: none
                    onEnded={handleClose}
                    onError={e => console.error('Video error:', e)}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            )}

            <BackButton className={styles.backButton} onClick={handleClickMain} />
        </div>
    );
}
export default Founder;
