"use client"

import { useState, useEffect } from "react"
import classNames from "classnames/bind"
import Link from "next/link"
import { MultiLine } from "../MultiLine"
import { Button } from "../Button"
import { shantell } from "@/utils/fonts"
import styles from "./Header.module.scss"

const cx = classNames.bind(styles)

const Header = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        setScrollY(window.scrollY)

        window.addEventListener("scroll", () => {
            setScrollY(window.scrollY)
        })
    }, [])

    const headerClassName = cx({
        header: true,
        "header--scrolled": scrollY > 0,
    })

    const logoClassName = cx(["logoLinkContent", shantell.className])

    return (
        <header className={headerClassName}>
            <div className={styles.container}>
                <div className={styles.menuWrapper}>
                    <Link className={styles.logoLink} href="/">
                        <MultiLine
                            firstSubline="MS"
                            secondSubline="."
                            className={logoClassName}
                        />
                    </Link>
                    <div className={styles.menuContent}>
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
                        <Button
                            content="View Guthub"
                            imageSrc="/github.svg"
                            alt="Guthub icon"
                            href="https://github.com/michaelspnv"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header }
