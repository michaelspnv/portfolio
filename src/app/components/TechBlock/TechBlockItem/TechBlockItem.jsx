import Image from "next/image"
import styles from "./TechBlockItem.module.scss"

const TechBlockItem = ({ imageSrc, title, filter = false }) => {
    return (
        <div className={styles.wrapper}>
            <Image
                className={filter ? styles.image : ""}
                src={imageSrc}
                width={65}
                height={65}
                alt={title}
            />
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export { TechBlockItem }
