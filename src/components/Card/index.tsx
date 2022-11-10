import React from "react";
import styles from './Card.modules.scss';

console.log(styles);
const Card: React.FC<any> = ({ title, imageUrl, price, onClickPLus, onClickFavorite }) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);

    const onPlus = () => {
        onClickPLus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    const onFavorite = () => {
        onClickFavorite()
        setFavorite(!favorite);
    };

    return (
        <div className={styles.card}>
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
        </div>
    )
}

export default Card;
