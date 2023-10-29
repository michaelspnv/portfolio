import classNames from "classnames/bind"
import styles from "./MultiLine.module.scss"

const cx = classNames.bind(styles)

const MultiLine = ({
    firstSubline,
    secondSubline,
    thirdSubline = "",
    className = "",
}) => {
    const classes = cx(["subline", className])

    return (
        <div className={styles.wrapper}>
            <span className={classes}>{firstSubline}</span>
            <span className={classes}>{secondSubline}</span>
            <span className={classes}>{thirdSubline}</span>
        </div>
    )
}

export { MultiLine }
