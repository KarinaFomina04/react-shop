import React from "react";
import styles from './Card.modules.scss';
import ContentLoader from "react-content-loader"

const Card: React.FC<any> = ({
    id,
    title,
    imageUrl,
    price,
    onClickPLus,
    onClickFavorite,
    onClickMinus,
    favorited = false,
    added = false,
    loading = false
}) => {

    const [isAdded, setIsAdded] = React.useState(added);
    const [favorite, setFavorite] = React.useState(favorited);

    const onPlus = () => {
        isAdded ? onClickMinus(id) : onClickPLus({ id, title, imageUrl, price });
        setIsAdded(!isAdded);
    };

    const onFavorite = () => {
        onClickFavorite({ id, title, imageUrl, price })
        setFavorite(!favorite);
    };

    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="-1" y="165" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="188" rx="5" ry="5" width="100" height="15" />
                    <rect x="0" y="222" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="215" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> : <>
                    <img
                        className={styles.favorite}
                        onClick={onFavorite}
                        width={15} height={15}
                        src={favorite ? "/img/heart_clicked.svg" : "/img/heart_unclicked.svg"}
                        alt="Unclicked" />

                    <img width={170} height={170} src={imageUrl} alt="Sneakers" />
                    <h5>{title}</h5>
                    <div className={styles.cardButtom}>
                        <div className={styles.cardName}>
                            <span>Price: </span>
                            <b>${price}</b>
                        </div>
                        <img
                            className={styles.plus}
                            onClick={onPlus}
                            width={15} height={15}
                            src={isAdded ? "/img/check.svg" : "/img/plus.svg"}
                            alt="Plus" />
                    </div>
                </>
            }


        </div>
    )
}

export default Card;
