import Image from "next/image"
import styles from "./TechBlockItem.module.scss"

const TechBlockItem = ({ imageSrc, title }) => {
    return (
        <div className={styles.wrapper}>
            <Image src={imageSrc} width={65} height={65} alt={title} />
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export { TechBlockItem }
