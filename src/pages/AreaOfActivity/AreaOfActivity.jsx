import styles from './AreaOfActivity.module.scss';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';


function AreaOfActivity() {
    const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/');
    };

    const handleClickConcern = () => {
        navigate('/first-lvl-cont/1');
    };
    
    const handleClickCharity = () => {
        navigate('/first-lvl-cont/3');
    };
    const handleClickScience = () => {
        navigate('/first-lvl-cont/4');
    };
    const handleClickMaster = () => {
        navigate('/first-lvl-cont/5');
    };
    const handleClickSocial = () => {
        navigate('/first-lvl-cont/6');
    };
    const handleClickEco = () => {
        navigate('/first-lvl-cont/7');
    };
    const handleClickSecurity = () => {
        navigate('/first-lvl-cont/8');
    };
    const handleClickLife = () => {
        navigate('/first-lvl-cont/9');
    };

    return (
        <div className={styles.background}>
			{/* <img className={styles.logo} src='/images/logoRitek-aoa' alt='logo'/> */}
            <div className={styles.buttonColumn}>
                <Button className={styles.button} text={'Добыча нефти \n и газа'} onClick={handleClickConcern} iconSrc={'/images/concern-Bg.png'} />
                <Button className={`${styles.button} ${styles.logoButton}`} iconSrc={'/images/logoRitek-aoa.png'} />
                <Button className={styles.button} text={'благотворительность'} onClick={handleClickCharity} iconSrc={'/images/charity-Bg.png'} />
                <Button className={styles.button} text={'наука'} onClick={handleClickScience} iconSrc={'/images/science-Bg.png'} />
                <Button className={styles.button} text={'конкурс \n профессионального \n мастерства'} onClick={handleClickMaster} iconSrc={'/images/master-Bg.png'} />
                <Button className={styles.button} text={'конкурс \n социальных и \n культурных прроектов'} onClick={handleClickSocial} iconSrc={'/images/social-Bg.png'}/>
                <Button className={styles.button} text={'экология'} onClick={handleClickEco} iconSrc={'/images/eco-Bg.png'}/>
                <Button className={styles.button} text={'промышленная \n безопасность'} onClick={handleClickSecurity} iconSrc={'/images/security-Bg.png'} />
                <Button className={styles.button} text={'профсоюзная жизнь'} onClick={handleClickLife} iconSrc={'/images/life-Bg.png'}/>
            </div>
            <BackButton className={styles.backButton} onClick={handleClickMain} />
        </div>
    );
}
export default AreaOfActivity;
