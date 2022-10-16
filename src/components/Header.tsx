import React from "react";

const Header: React.FC = () => {
    return (
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.svg" />
                <div className="headerInfo">
                    <h3 className="text-uppercase">You in style</h3>
                    <p>Street fashion</p>
                </div>

            </div>
            <ul className="headerRight">
                <li className="mr-30">
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