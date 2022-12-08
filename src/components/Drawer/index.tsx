import React from "react";
import styles from './Drawer.modules.scss'


const Drawer: React.FC<any> = ({ onClose, onRemove, items = [] }) => {
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

                { //render cart
                    items.length > 0 ? (
                        <div>
                            <div className={styles.items}>
                                {items.map((obj: any) => ( 
                                    <div key={obj.id} className={styles.cartItem}>
                                        <img className={styles.cartImage} width={70} height={70} src={obj.imageUrl} alt="Sneackers" />
                                        <div className={styles.cartInfo}>
                                            <p>{obj.title}</p>
                                            <b>${obj.price}</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className={styles.removeBtn} width={11} height={11} src="/img/btn-remove.svg" alt="Remove" />
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
                                    Checkout <img src="/img/right-arrow.svg" alt="Arrow" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.cartEmpty}>
                            <img className={styles.cartImg} src="/img/empty_cart.svg" alt="EmptyCart" />
                            <h2>Cart is empty</h2>
                            <p>Add products</p>
                            <button onClick={onClose} className={styles.returnButton}>
                                Go back <img src="/img/arrow-left.svg" alt="Arrow" />
                            </button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Drawer;
