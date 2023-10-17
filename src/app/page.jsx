import classNames from "classnames/bind"
import styles from "./page.module.scss"
import Link from "next/link"
import Image from "next/image"
import { shantell } from "./utils/fonts"

const cx = classNames.bind(styles)

export default function Home() {
    const logoClassName = cx(["logoLink", shantell.className])

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.menuWrapper}>
                        <Link className={logoClassName} href="/">
                            <span className={styles.logo}>MS</span>
                            <span className={styles.logoDecoration}>.</span>
                        </Link>
                        <div className={styles.menuContent}>
                            <div className={styles.menu}>
                                <Link className={styles.link} href="#home">
                                    <p className={styles.linkText}>Home</p>
                                </Link>
                                <Link className={styles.link} href="#about">
                                    <p className={styles.linkText}>About me</p>
                                </Link>
                                <Link className={styles.link} href="#projects">
                                    <p className={styles.linkText}>
                                        Featured projects
                                    </p>
                                </Link>
                                <Link className={styles.link} href="#contacts">
                                    <p className={styles.linkText}>
                                        Contact me
                                    </p>
                                </Link>
                            </div>
                            <Link className={styles.button} href="/">
                                <span className={styles.buttonText}>
                                    View Resume
                                </span>
                                <Image
                                    src="/bag.svg"
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.section1}>
                <div className={styles.container}></div>
            </div>
            <div className={styles.section2}>
                <div className={styles.container}></div>
            </div>
        </>
    )
}
