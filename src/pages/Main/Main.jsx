import styles from './Main.module.scss';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Main() {

	const navigate = useNavigate();

   const handleClickFounder = () => {
        navigate('/founder');
   };
	const handleClickManagment = () => {
        navigate('/managment');
   };
	const handleClickGeography = () => {
        navigate('/geography');
   };
	const handleClickAOA = () => {
        navigate('/area-of-activity');
   };
	const handleClickWebsite = () => {
        navigate('/website');
   };


    return (
        <div className={styles.background}>
            <div className={styles.logoWrapper}>
                <img src="/images/logoLuk-main.png" alt="Логотип компании" className={styles.logoImage} />
                <img src="/images/logoRitek-main.png" alt="Логотип компании" className={styles.logoImage} />
            </div>
            <div className={styles.titleWrapper}>
                <h2>
                    РОССИЙСКАЯ ИННОВАЦИОННАЯ <br /> ТОПЛИВНО-ЭНЕРГЕТИЧЕСКАЯ КОМПАНИЯ
                </h2>
            </div>
            <div className={styles.buttonWrapper}>
                <Button className={styles.button} onClick={handleClickFounder} text={'ОСНОВАТЕЛЬ РИТЭК\n В.И. ГРАЙФЕР'} iconSrc={'/images/founderButton.png'} />
                <div className={styles.buttonColumn}>
                    <Button className={styles.button} onClick={handleClickManagment} text={'О КОМПАНИИ'} iconSrc={'/images/managmentButton.png'} />
                    <Button className={styles.button} onClick={handleClickAOA} text={'НАПРАВЛЕНИЯ\n ДЕЯТЕЛЬНОСТИ'} iconSrc={'/images/aoaButton.png'} />
                    <Button className={styles.button} onClick={handleClickGeography} text={'ГЕОГРАФИЯ'} iconSrc={'/images/geographyButton.png'} />
                    <Button className={styles.button} onClick={handleClickWebsite} text={'ПЕРЕЙТИ НА САЙТ'} iconSrc={'/images/siteButton.png'} />
                </div>
            </div>
        </div>
    );
}
export default Main;

