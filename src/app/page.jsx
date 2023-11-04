import Image from "next/image"
import { Info } from "./components/Info"
import { Title } from "./components/Title"
import { MultiLine } from "./components/MultiLine"
import { TechBlock } from "./components/TechBlock"
import { ProjectBlock } from "./components/ProjectBlock"
import { Paragraph } from "./components/Paragraph"
import { Button } from "./components/Button"
import { techBlocks, projects } from "./utils/content"
import styles from "./page.module.scss"

export default function Home() {
    return (
        <>
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
            <a className={styles.anchor} id="tech"></a>
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
            <a className={styles.anchor} id="projects"></a>
            <div className={styles.section3}>
                <div className={styles.container}>
                    <Info>
                        <Title content="Projects" />
                        <MultiLine
                            firstSubline="Featured"
                            secondSubline="projects"
                            thirdSubline="."
                        />
                    </Info>
                    <div className={styles.projectsGrid}>
                        {projects
                            .slice()
                            .reverse()
                            .map((project) => (
                                <ProjectBlock
                                    key={project.id}
                                    imageSrc={project.imageSrc}
                                    tags={project.tags}
                                    title={project.title}
                                    thumbnail={project.thumbnail}
                                    description={project.description}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <a className={styles.anchor} id="about"></a>
            <div className={styles.section4}>
                <div className={styles.decorationRight}></div>
                <div className={styles.decorationLeft}></div>
                <div className={styles.container}>
                    <Info>
                        <Title content="Bio" />
                        <MultiLine
                            firstSubline="About"
                            secondSubline="me"
                            thirdSubline="."
                        />
                    </Info>
                    <div className={styles.about}>
                        <div className={styles.secondCircle}>
                            <div className={styles.firstCircle}>
                                <div className={styles.imageWrapper}>
                                    <p className={styles.emoji}>💻</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.aboutInfo}>
                            <Paragraph>
                                My name is Michael, I am a web developer who is
                                constantly learning and following the latest
                                novelties in this industry. I like to turn ideas
                                into something real and beautiful.
                            </Paragraph>
                            <Paragraph>
                                I've been studying web development on my own
                                since I was 17. At the moment I am studying at
                                the Russian Technical University in the
                                specialty "Software Engineering".
                            </Paragraph>
                            <Paragraph>
                                I work as a freelancer, develop custom websites
                                and web applications.
                            </Paragraph>
                            <div className={styles.buttonWrapper}>
                                <Button
                                    content="View Guthub"
                                    imageSrc="/github.svg"
                                    alt="Guthub icon"
                                    href="https://github.com/michaelspnv"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
