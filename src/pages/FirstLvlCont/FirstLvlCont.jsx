import styles from './FirstLvlCont.module.scss';
import BackButton from '../../components/BackButton/BackButton';
import FirstLvlComp from '../../components/FirstLvlComp/FirstLvlComp';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../../data/data';

function FirstLvlCont() {
    const navigate = useNavigate();
    const { id } = useParams();

    const item = data.find(item => item.id === parseInt(id));

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
