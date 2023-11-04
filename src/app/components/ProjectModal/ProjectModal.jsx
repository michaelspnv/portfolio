import { useRef, useEffect } from "react"
import Image from "next/image"
import styles from "./ProjectModal.module.scss"
import { createPortal } from "react-dom"

const ProjectModal = ({ imageSrc, tags, title, description, setShowModal }) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden"
    }, [])

    const overlayRef = useRef()

    const handleClick = (e) => {
        if (e.target === overlayRef.current) {
            setShowModal(false)
            document.body.style.overflowY = "unset"
        }
    }

    const closeModal = () => {
        setShowModal(false)
        document.body.style.overflowY = "unset"
    }

    const projectModal = (
        <div ref={overlayRef} className={styles.overlay} onClick={handleClick}>
            <div className={styles.wrapper}>
                <Image
                    className={styles.closeButton}
                    src="/cross.svg"
                    width={70}
                    height={70}
                    alt="Close button"
                    onClick={closeModal}
                />
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        width={700}
                        height={450}
                        alt={title}
                    />
                </div>
                <>
                    <p className={styles.techTitle}>Used technologies:</p>
                    <div className={styles.tags}>
                        {tags.map((tag) => (
                            <div className={styles.tag} key={tag}>
                                <span className={styles.tagText}>{tag}</span>
                            </div>
                        ))}
                    </div>
                </>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )

    return createPortal(projectModal, document.getElementById("modals"))
}

export { ProjectModal }
