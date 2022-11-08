import React from "react";
import styles from './Card.modules.scss';

console.log(styles);
const Card: React.FC<any> = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img width={15} height={15} src="/img/heart_unclicked.svg" alt="Unclicked" />
            </div>
            <img width={170} height={170} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className={styles.cardButtom}>
                <div className={styles.cardName}>
                    <span>Price: </span>
                    <b>${props.price}</b>
                </div>
                <button className={styles.button} onClick={props.onClick}>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    )
}

export default Card;
