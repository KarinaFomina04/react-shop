import React from "react";
import styles from './Header.modules.scss'

const Header: React.FC<any> = ({ onClickCart }) => {
    return (
        <header>
            <div className={styles.headerLeft}>
                <img width={40} height={40} src="/img/logo.svg" />
                <div className="headerInfo">
                    <h3 className={styles.text_uppercase}>You in style</h3>
                    <p>Street fashion</p>
                </div>

            </div>
            <ul className={styles.headerRight}>
                <li
                    onClick={onClickCart}
                    className={styles.mr_30}>
                    <img width={18} height={18} src="/img/cart.svg" />
                    <span> $450 </span>
                </li>
                <li className="profile">
                    <img width={18} height={18} src="/img/profile.svg" />
                </li>
            </ul>
        </header>
    )

}

export default Header;