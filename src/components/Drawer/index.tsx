import React from "react";
import styles from './Drawer.modules.scss'

const Drawer: React.FC<any> = ({ onClose }) => {
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
                    <div className={styles.cartItem}>
                        <img className={styles.cartImage} width={70} height={70} src="/img/sneackers/1.jpg" alt="Sneackers" />
                        <div className={styles.cartInfo}>
                            <p>Buty męskie New Balance Numeric NM1010PW – czarne</p>
                            <b>$120</b>
                        </div>
                        <img className={styles.removeBtn} width={11} height={11} src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                    <div className={styles.cartItem}>
                        <img className={styles.cartImage} width={70} height={70} src="/img/sneackers/2.jpg" alt="Sneackers" />
                        <div className={styles.cartInfo}>
                            <p>Buty męskie New Balance Numeric NM1010PW – czarne</p>
                            <b>$120</b>
                        </div>
                        <img className={styles.removeBtn} width={11} height={11} src="/img/btn-remove.svg" alt="Remove" />
                    </div>
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