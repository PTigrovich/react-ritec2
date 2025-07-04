import styles from './SecondLvlCont.module.scss';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

function SecondLvlCont() {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/first-lvl-cont');
    };

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div className={styles.textColumn}>
                    <h2>ТПП ВОЛГОГРАДНЕФТЕГАЗ</h2>
                    <p>
                        волгоградская обсласть <br /> астраханская область <br /> республика калмыкия
                    </p>
                    <h3>Инновационные технологии</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a obcaecati accusamus earum esse. Nesciunt cum cupiditate ab.
                        Aspernatur blanditiis, adipisci rem reprehenderit quaerat molestias veniam quas. Iusto, ducimus distinctio. <br /> Lorem, ipsum dolor
                        sit amet consectetur adipisicing elit. Corporis magnam enim sequi alias adipisci, molestias a quasi temporibus sapiente qui. Sit labore
                        amet similique ab minus! Soluta quibusdam et doloribus.
                    </p>
                    <h3>Инновационные технологии</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a obcaecati accusamus earum esse. Nesciunt cum cupiditate ab.
                        Aspernatur blanditiis, adipisci rem reprehenderit quaerat molestias veniam quas. Iusto, ducimus distinctio. <br /> Lorem, ipsum dolor
                        sit amet consectetur adipisicing elit. Corporis magnam enim sequi alias adipisci, molestias a quasi temporibus sapiente qui. Sit labore
                        amet similique ab minus! Soluta quibusdam et doloribus.
                    </p>
                </div>
            </div>
            <div className={styles.imageBlock}>
                <img className={styles.image} src="/images/background.jp" alt="фото" />
            </div>
            <BackButton className={styles.backButton} onClick={handleClickBack} />
        </div>
    );
}
export default SecondLvlCont;
