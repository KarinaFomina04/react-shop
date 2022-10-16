import React from "react";

const Drawer: React.FC = () => {
    return (
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
    )
}

export default Drawer;