import styles from "./Button.module.scss"

export default function Button({ content, clickable }) {
    return (
        <button className={styles.button}>
            { content }
        </button>
    )
}