import styles from './Button.module.scss';

function Button({ className = '', onClick, text, iconSrc }) {
    return (
        <button
            className={`${styles.base} ${className}`}
            onClick={onClick}
            // Добавляем инлайн-стиль для фонового изображения
            style={iconSrc ? { backgroundImage: `url(${iconSrc})` } : {}}
        >
            <span className={styles.text}>{text}</span>
        </button>
    );
}

export default Button;
