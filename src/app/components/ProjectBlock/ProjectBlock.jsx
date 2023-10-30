import Image from "next/image"
import styles from "./ProjectBlock.module.scss"

const ProjectBlock = ({ imageSrc, tags, title, description }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <Image src={imageSrc} width={350} height={225} alt={title} />
            </div>
            <div className={styles.tags}>
                {tags.map((tag) => (
                    <div className={styles.tag} key={tag}>
                        <span className={styles.tagText}>{tag}</span>
                    </div>
                ))}
            </div>
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export { ProjectBlock }
