import React from "react";

const Card: React.FC<any> = (props) => {
    // const onClickButton = () => {
    //     alert(props.title);
    // }
    
    return (
        <div className="card">
            <div className="favorite">
                <img width={15} height={15} src="/img/heart_unclicked.svg" alt="Unclicked" />
            </div>
            <img width={170} height={170} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="cardButtom">
                <div className="cardName">
                    <span>Price: </span>
                    <b>${props.price}</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    )
}

export default Card;
