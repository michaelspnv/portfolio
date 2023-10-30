import Link from "next/link"
import Image from "next/image"
import styles from "./Button.module.scss"

const Button = ({ content, imageSrc, alt = "", href = "/" }) => {
    return (
        <Link className={styles.button} href={href} target="_blank">
            <span className={styles.buttonText}>{content}</span>
            <Image src={imageSrc} width={20} height={20} alt={alt} />
        </Link>
    )
}

export { Button }
