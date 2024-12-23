import React from "react";

import styles from "../components/ImageScrollList.module.scss";

const ImageScrollList = ({ images }: { images: string[] }) => {
    return (
        <div className={styles.images}>
            {images.map((image, index) => (
                <img key={index} className={styles.image} src={image} alt="image-of-kezia" />
            ))}
        </div>
    );
};

export default ImageScrollList;