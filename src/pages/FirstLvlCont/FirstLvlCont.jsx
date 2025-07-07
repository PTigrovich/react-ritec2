

import styles from './FirstLvlCont.module.scss';
import BackButton from '../../components/BackButton/BackButton';
import FirstLvlComp from '../../components/FirstLvlComp/FirstLvlComp';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data/data.json'; // Исправленный импорт

function FirstLvlCont() {
    const navigate = useNavigate();
    const { id } = useParams();

    // Проверка что данные загружены
    if (!data || !Array.isArray(data)) {
        return (
            <div className={styles.error}>
                <p>Ошибка загрузки данных</p>
                <button onClick={() => window.location.reload()}>Перезагрузить</button>
            </div>
        );
    }

    const item = data.find(item => item.id === parseInt(id));

    // Проверка что элемент найден
    if (!item) {
        return (
            <div className={styles.notFound}>
                <p>Элемент не найден</p>
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        );
    }

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.background}>
            <FirstLvlComp item={item} />
            <BackButton className={styles.backButton} onClick={handleBack} />
        </div>
    );
}

export default FirstLvlCont;
