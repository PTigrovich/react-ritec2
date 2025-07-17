import styles from './FirstLvlCont.module.scss';
import BackButton from '../../components/BackButton/BackButton';
import FirstLvlComp from '../../components/FirstLvlComp/FirstLvlComp';
import { useNavigate, useParams } from 'react-router-dom';

function FirstLvlCont() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.background}>
      <FirstLvlComp />
      <BackButton className={styles.backButton} onClick={handleBack} />
    </div>
  );
}

export default FirstLvlCont;
