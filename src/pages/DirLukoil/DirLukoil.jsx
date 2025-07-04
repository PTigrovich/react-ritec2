import styles from './DirLukoil.module.scss';

import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

function DirLukoil() {
    const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/managment');
    };
    

    return (
        <div className={styles.background}>
            <div className={styles.titleWrapper}>
                <h2>Совет директоров</h2>
            </div>
            <BackButton className={styles.backButton} onClick={handleClickMain} variant={'red'} />
        </div>
    );
}
export default DirLukoil;
