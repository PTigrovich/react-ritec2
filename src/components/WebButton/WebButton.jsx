import styles from './WebButton.module.scss';

function WebButton({ className = '', onClick, variant = 'default' }) {
    const iconPath = {
        default: '/images/icon-refresh.png',
        right: '/images/icon-right.png',
        left: '/images/icon-left.png',
    }[variant];

    // Добавляем дополнительный класс для сжатой иконки
    const iconClass = variant === 'default' 
        ? `${styles.icon} ${styles.compressedIcon}`
        : styles.icon;

    return (
        <button className={`${styles.base} ${className}`} onClick={onClick}>
            <img src={iconPath} alt="Кнопка" className={iconClass} />
        </button>
    );
}

export default WebButton;