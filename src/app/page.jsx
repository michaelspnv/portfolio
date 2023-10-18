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
                <div className={styles.container}>
                    <div className={styles.info}>
                        <div className={styles.textInfo}>
                            <div className={styles.infoTitle}>
                                <span>Hi, I am&nbsp;</span>
                                <h1 className={styles.infoName}>Michael</h1>
                            </div>
                            <div className={styles.infoDescription}>
                                <span>A dedicated&nbsp;</span>
                                <span className={styles.infoDecoration}>
                                    Frontend Developer&nbsp;
                                </span>
                                <span>
                                    who likes to transform interesting ideas
                                    <br />
                                    into stunning experiences. Let's build
                                    something amazing!
                                </span>
                            </div>
                        </div>
                        <div className={styles.socials}>
                            <a
                                className={styles.socialsLink}
                                href="https://github.com/michaelspnv"
                                target="_blank"
                            >
                                <Image
                                    className={styles.socialsIcon}
                                    src="/github.svg"
                                    width={30}
                                    height={30}
                                    alt="github icon"
                                />
                            </a>
                            <a
                                className={styles.socialsLink}
                                href="mailto:michaelsuponev@gmail.com"
                                target="_blank"
                            >
                                <Image
                                    className={styles.socialsIcon}
                                    src="/gmail.svg"
                                    width={30}
                                    height={30}
                                    alt="gmail icon"
                                />
                            </a>
                            <a
                                className={styles.socialsLink}
                                href="https://t.me/mshkspnv"
                                target="_blank"
                            >
                                <Image
                                    className={styles.socialsIcon}
                                    src="/telegram.svg"
                                    width={30}
                                    height={30}
                                    alt="telegram icon"
                                />
                            </a>
                            <a
                                className={styles.socialsLink}
                                href="https://vk.com/mshkspnv"
                                target="_blank"
                            >
                                <Image
                                    className={styles.socialsIcon}
                                    src="/vk.svg"
                                    width={30}
                                    height={30}
                                    alt="vk icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section2}>
                <div className={styles.container}></div>
            </div>
        </>
    )
}
