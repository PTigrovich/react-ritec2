import styles from './Managment.module.scss';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';


function Managment() {

	const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/');
    };
	 const handleClickLucoil = () => {
         navigate('/first-lvl-cont/13');
     };
	 const handleClickRitec = () => {
         navigate('/first-lvl-cont/14');
     };


	return (
        <div className={styles.background}>
            <div className={styles.logoWrapper}>
                <img src="/images/logoLuk-manag.png" alt="Логотип компании" className={styles.logoImage} />
                <img src="/images/logoRitek-manag.png" alt="Логотип компании" className={styles.logoImage} />
            </div>
            <div className={styles.buttonsContainer}>
                <Button onClick={handleClickLucoil} text={'ПАО «ЛУКОЙЛ»'} className={styles.contentButton} iconSrc={'/images/manag-button-luk.png'} />
                <Button onClick={handleClickRitec} text={'ООО «РИТЭК»'} className={styles.contentButton} iconSrc={'/images/manag-button-ritek.png'} />
            </div>
            <BackButton className={styles.backButton} onClick={handleClickMain} />
        </div>
    );
}
export default Managment;
