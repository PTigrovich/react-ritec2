import styles from './BackButton.module.scss';

function BackButton({ onClick, className = '', variant = 'default' }) {
    // Определяем классы в зависимости от варианта
    const buttonClass = `${styles.base} ${styles[variant] || ''} ${className}`;

    const iconPath = {
        default: '/images/icon-backButton.png',
        red: '/images/icon-backButton2.png',
        blue: '/images/icon-backButton2.png',
    }[variant];

    return (
        <button className={buttonClass} onClick={onClick}>
            <img src={iconPath} alt="Кнопка назад" className={styles.icon} />
        </button>
    );
}

BackButton.defaultProps = {
    variant: 'default',
};

export default BackButton;
