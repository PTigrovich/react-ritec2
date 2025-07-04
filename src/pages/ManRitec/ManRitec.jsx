import styles from './ManRitec.module.scss';
import ManagerCard from '../../components/ManagerCard/ManagerCard';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate, useParams } from 'react-router-dom';


function ManRitec() {
    const navigate = useNavigate();

	 

	 const handleBack = () => {
              navigate(-1); 
     };

    return (
        <div className={styles.background}>
            <div className={styles.titleWrapper}>
                <h2>О компании</h2>
            </div>
            <div className={styles.logoWrapper}>
                <img src="/images/logoRitek-manag.png" alt="Логотип компании" className={styles.logoImage} />
            </div>
            <div className={styles.manWrapper}>
                <ManagerCard text={'Нургалиев Ренат\n Галеевич'} />
                <ManagerCard text={'Батталов Радик\n Маратович'} />
                <ManagerCard text={'Беркута Юрий\n Николаевич'} />
                <ManagerCard text={'Палий Алексей\n Петрович'} />
                <ManagerCard className={styles.textWhite} text={'Широков Андрей\n Анатольевич'} />
            </div>
           
            <BackButton className={styles.backButton} onClick={handleBack} variant="blue" />
        </div>
    );
}
export default ManRitec;
