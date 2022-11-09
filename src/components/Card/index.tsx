import React from "react";
import styles from './Card.modules.scss';

console.log(styles);
const Card: React.FC<any> = (props) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        setFavorite(!favorite);
    };

    // React.useEffect(() => {
    //     console.log('Variable has changed!');
    // }, [isAdded, favorite]);

    return (
        <div className={styles.card}>
            <img
                className={styles.favorite}
                onClick={onClickFavorite}
                width={15} height={15}
                src={favorite ? "/img/heart_clicked.svg" : "/img/heart_unclicked.svg"}
                alt="Unclicked" />

            <img width={170} height={170} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className={styles.cardButtom}>
                <div className={styles.cardName}>
                    <span>Price: </span>
                    <b>${props.price}</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    width={15} height={15}
                    src={isAdded ? "/img/check.svg" : "/img/plus.svg"}
                    alt="Plus" />
            </div>
        </div>
    )
}

export default Card;
