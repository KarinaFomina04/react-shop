import React from "react";
import styles from './Drawer.modules.scss'

const Drawer: React.FC<any> = ({ onClose, items = [] }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2>
                    Cart
                    <img
                        onClick={onClose}
                        className={styles.removeBtn}
                        width={11} height={11}
                        src="/img/btn-remove.svg" alt="Close" />
                </h2>
                <div className={styles.items}>
                    {items.map((obj: any) => (
                        <div className={styles.cartItem}>
                            <img className={styles.cartImage} width={70} height={70} src={obj.imageUrl} alt="Sneackers" />
                            <div className={styles.cartInfo}>
                                <p>{obj.title}</p>
                                <b>${obj.price}</b>
                            </div>
                            <img className={styles.removeBtn} width={11} height={11} src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                    ))
                    }
                </div>
                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>$450</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>$22.5</b>
                        </li>
                    </ul>
                    <button className={styles.greenButton}>
                        Checkout <img width={25} height={25} src="/img/right-arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;
