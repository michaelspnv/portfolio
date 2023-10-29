import styles from "./Info.module.scss"

const Info = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>
}

export { Info }
