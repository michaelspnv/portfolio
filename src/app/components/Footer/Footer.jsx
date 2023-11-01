import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.upper}>
                    <div className={styles.menu}>
                        <Link className={styles.link} href="/">
                            <p className={styles.linkText}>Home</p>
                        </Link>
                        <Link className={styles.link} href="#tech">
                            <p className={styles.linkText}>Tech</p>
                        </Link>
                        <Link className={styles.link} href="#projects">
                            <p className={styles.linkText}>Projects</p>
                        </Link>
                        <Link className={styles.link} href="#about">
                            <p className={styles.linkText}>About</p>
                        </Link>
                    </div>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.socials}>
                        <p className={styles.info}>Social media</p>
                        <div className={styles.socialsMenu}>
                            <a
                                className={styles.socialsLink}
                                href="https://t.me/mshkspnv"
                                target="_blank"
                            >
                                <Image
                                    className={styles.socialsIcon}
                                    src="/telegram-white.svg"
                                    width={25}
                                    height={25}
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
                                    src="/vk-white.svg"
                                    width={25}
                                    height={25}
                                    alt="vk icon"
                                />
                            </a>
                            <a
                                className={styles.socialsLink}
                                href="https://github.com/michaelspnv"
                                target="_blank"
                            >
                                <Image
                                    className={styles.socialsIcon}
                                    src="/github-white.svg"
                                    width={25}
                                    height={25}
                                    alt="github icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.horizontalLine}></div>
                <div className={styles.lower}>
                    <p className={styles.copyright}>
                        &copy; 2023 Michael. All rights reserved.
                    </p>
                    <p className={styles.madeBy}>
                        Designed and developed by me.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export { Footer }
