import styles from './ManagerCard.module.scss';

function ManagerCard({ text, className = '' }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageBlock}>
                <img className={styles.image} src="/images/background.jpg" alt="руководитель ритек" />
            </div>
            <div className={styles.textBlock}>
                <h4 className={`${styles.textBase} ${className}`}>{text}</h4>
            </div>
        </div>
    );
}

export default ManagerCard;
