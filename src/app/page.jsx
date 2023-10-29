import classNames from "classnames/bind"
import Link from "next/link"
import Image from "next/image"
import { Info } from "./components/Info"
import { Title } from "./components/Title"
import { MultiLine } from "./components/MultiLine"
import { TechBlock } from "./components/TechBlock"
import { techBlocks } from "./utils/content"
import { shantell } from "./utils/fonts"
import styles from "./page.module.scss"

const cx = classNames.bind(styles)

export default function Home() {
    const logoClassName = cx(["logoLink", shantell.variable])

    return (
        <>
            <header className={styles.header}>
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
                            <MultiLine
                                firstSubline="Hi, I am"
                                secondSubline="Michael"
                                className="subline--large"
                            />
                            <div className={styles.infoDescription}>
                                <span>A dedicated&nbsp;</span>
                                <span className={styles.infoDecoration}>
                                    Web Developer&nbsp;
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
                <div className={styles.container}>
                    <Info>
                        <Title content="Technologies" />
                        <MultiLine
                            firstSubline="What"
                            secondSubline="I use"
                            thirdSubline="."
                        />
                    </Info>
                    <div className={styles.techGrid}>
                        {techBlocks.map((techBlock) => (
                            <TechBlock
                                key={techBlock.id}
                                title={techBlock.title}
                                mainImageSrc={techBlock.mainImageSrc}
                                content={techBlock.content}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
