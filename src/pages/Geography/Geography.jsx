import styles from './Geography.module.scss';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

function Geography() {

	const navigate = useNavigate();

	const handleClickBack = () => {
         navigate('/');
    };

    return (
        <div className={styles.background}>
            <BackButton className={styles.backButton} onClick={handleClickBack} />
        </div>
    );
}
export default Geography;
