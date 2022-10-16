import React from "react";

const App: React.FC = () => {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2>Cart <img className="removeBtn" width={11} height={11} src="/img/btn-remove.svg" alt="Remove" /></h2>
                    <div className="items">
                        <div className="cartItem">
                            <img className="cartImage" width={70} height={70} src="/img/sneackers/1.jpg" alt="Sneackers" />
                            <div className="cartInfo">
                                <p>Buty męskie New Balance Numeric NM1010PW – czarne</p>
                                <b>$120</b>
                            </div>
                            <img className="removeBtn" width={11} height={11} src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                        <div className="cartItem">
                            <img className="cartImage" width={70} height={70} src="/img/sneackers/2.jpg" alt="Sneackers" />
                            <div className="cartInfo">
                                <p>Buty męskie New Balance Numeric NM1010PW – czarne</p>
                                <b>$120</b>
                            </div>
                            <img className="removeBtn" width={11} height={11} src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                    </div>
                    <div className="cartTotalBlock">
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
                        <button className="greenButton">Checkout <img width={25} height={25} src="/img/right-arrow.svg" alt="Arrow" /></button>
                    </div>
                </div>
            </div>
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
            <div className="content">
                <div className="titleWithSearch">
                    <h1>All</h1>
                    <div className="search">
                        <img width={18} height={18} src="/img/search.svg" alt="Search" />
                        <input placeholder="Search..." />

                    </div>
                </div>
                <div className="sneakers">
                    <div className="card">
                        <div className="favorite">
                            <img width={15} height={15} src="/img/heart_unclicked.svg" alt="Unclicked" />
                        </div>
                        <img width={170} height={170} src="/img/sneackers/1.jpg" alt="Sneakers" />
                        <h5>Nike Air Force 1 '07 LV8 men's Shoes</h5>
                        <div className="cardButtom">
                            <div className="cardName">
                                <span>Price: </span>
                                <b>$120</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="favorite">
                            <img width={15} height={15} src="/img/heart_unclicked.svg" alt="Unclicked" />
                        </div>
                        <img width={170} height={170} src="/img/sneackers/2.jpg" alt="Sneakers" />
                        <h5>Nike Air Force 1 '07 LV8 men's Shoes</h5>
                        <div className="cardButtom">
                            <div className="cardName">
                                <span>Price: </span>
                                <b>$120</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="favorite">
                            <img width={15} height={15} src="/img/heart_unclicked.svg" alt="Unclicked" />
                        </div>
                        <img width={170} height={170} src="/img/sneackers/3.jpg" alt="Sneakers" />
                        <h5>Nike Air Force 1 '07 LV8 men's Shoes</h5>
                        <div className="cardButtom">
                            <div className="cardName">
                                <span>Price: </span>
                                <b>$120</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="favorite">
                            <img width={15} height={15} src="/img/heart_clicked.svg" alt="Clicked" />
                        </div>
                        <img width={170} height={170} src="/img/sneackers/4.jpg" alt="Sneakers" />
                        <h5>Nike Air Force 1 '07 LV8 men's Shoes</h5>
                        <div className="cardButtom">
                            <div className="cardName">
                                <span>Price: </span>
                                <b>$120</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default App;
