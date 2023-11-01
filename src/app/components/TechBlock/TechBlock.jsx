import Image from "next/image"
import { TechBlockItem } from "./TechBlockItem"
import styles from "./TechBlock.module.scss"

const TechBlock = ({ title, mainImageSrc, content, alt = "", ...props }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <Image
                    src={mainImageSrc}
                    width={60}
                    height={60}
                    alt={alt}
                    {...props}
                />
                <p className={styles.title}>{title}</p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.grid}>
                {content.map((item) => (
                    <TechBlockItem
                        key={item.id}
                        imageSrc={item.imageSrc}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    )
}

export { TechBlock }
