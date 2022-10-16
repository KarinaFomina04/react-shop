import React from "react";

const Card: React.FC = () => {
    return (
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
    )
}

export default Card;
