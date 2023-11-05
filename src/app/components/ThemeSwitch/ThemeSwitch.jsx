import classNames from "classnames/bind"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "@/store/features/themeSlice"
import styles from "./ThemeSwitch.module.scss"

const cx = classNames.bind(styles)

const ThemeSwitch = () => {
    const dispatch = useDispatch()

    const isDark = useSelector((state) => state.theme.isDark)

    const switchClassName = cx({
        switch: true,
        "switch--on": isDark,
    })

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            isDark ? "dark" : "light"
        )
    }, [isDark])

    return (
        <div
            className={styles.container}
            onClick={() => dispatch(toggleTheme())}
        >
            <p className={styles.title}>Dark mode</p>
            <div className={styles.wrapper}>
                <div className={switchClassName}>{isDark ? "On" : "Off"}</div>
            </div>
        </div>
    )
}

export { ThemeSwitch }
