import React from "react";
import styles from './Header.modules.scss';
import { Link } from 'react-router-dom';

const Header: React.FC<any> = ({ onClickCart }) => {
    return (
        <header>
            <Link to={"/"}>
                <div className={styles.headerLeft}>
                    <img width={40} height={40} src="/img/logo.svg" alt="Logotype" />
                    <div className="headerInfo">
                        <h3 className={styles.text_uppercase}>You in style</h3>
                        <p>Street fashion</p>
                    </div>
                </div>
            </Link>
            <ul className={styles.headerRight}>
                <li
                    onClick={onClickCart}
                    className={styles.mr_20}>
                    <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                    <span> $450 </span>
                </li>
                <li className={styles.mr_20}>
                    <Link to={"/favorites"}>
                        <img width={16} height={16} src="/img/heart_unclicked.svg" alt="Marker" />
                    </Link>
                </li>
                <li className="profile">
                    <img width={18} height={18} src="/img/profile.svg" alt="User" />
                </li>
            </ul>
        </header>
    )

}

export default Header;