"use client"

import { useState, useEffect } from "react"
import classNames from "classnames/bind"
import Link from "next/link"
import Image from "next/image"
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

    const logoClassName = cx(["logoLink", shantell.className])

    return (
        <header className={headerClassName}>
            <div className={styles.container}>
                <div className={styles.menuWrapper}>
                    <MultiLine
                        firstSubline="MS"
                        secondSubline="."
                        className={logoClassName}
                    />
                    <div className={styles.menuContent}>
                        <div className={styles.menu}>
                            <Link className={styles.link} href="#home">
                                <p className={styles.linkText}>Home</p>
                            </Link>
                            <Link className={styles.link} href="#about">
                                <p className={styles.linkText}>Tech</p>
                            </Link>
                            <Link className={styles.link} href="#projects">
                                <p className={styles.linkText}>Projects</p>
                            </Link>
                            <Link className={styles.link} href="#contacts">
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
