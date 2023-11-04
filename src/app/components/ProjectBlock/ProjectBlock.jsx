"use client"

import { useState } from "react"
import Image from "next/image"
import { ProjectModal } from "../ProjectModal"
import styles from "./ProjectBlock.module.scss"

const ProjectBlock = ({ imageSrc, tags, title, thumbnail, description }) => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <>
            {showModal && (
                <ProjectModal
                    imageSrc={imageSrc}
                    tags={tags}
                    title={title}
                    description={description}
                    setShowModal={setShowModal}
                />
            )}
            <div className={styles.wrapper} onClick={handleClick}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        width={350}
                        height={225}
                        alt={title}
                    />
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
                    <p className={styles.thumbnail}>{thumbnail}</p>
                </div>
            </div>
        </>
    )
}

export { ProjectBlock }
