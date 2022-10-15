import React from "react";

const App: React.FC = () => {
    return (
        <div className="wrapper clear">
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
                        <span> 450$</span>
                    </li>
                    <li className="profile">
                        <img width={18} height={18} src="/img/profile.svg" />
                    </li>    
                </ul>
            </header>
            <div className="content">
                <h1>All</h1>
                <div className="sneakers">
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
                    <h5>Nike Air Force 1 '07 LV8 men's Shoes</h5>
                    <div className="cardButtom">
                        <div className="cardName">
                            <span>Price: </span>
                            <b>12 999 rub.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
                    <h5>Nike Air Force 1 '07 LV8 men's Shoes</h5>
                    <div className="cardButtom">
                        <div className="cardName">
                            <span>Price: </span>
                            <b>12 999 rub.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
                    <h5>Nike Air Force 1 '07 LV8 men's Shoes</h5>
                    <div className="cardButtom">
                        <div className="cardName">
                            <span>Price: </span>
                            <b>12 999 rub.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
                    <h5>Nike Air Force 1 '07 LV8 men's Shoes</h5>
                    <div className="cardButtom">
                        <div className="cardName">
                            <span>Price: </span>
                            <b>12 999 rub.</b>
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
