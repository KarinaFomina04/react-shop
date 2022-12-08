import React from "react";
import styles from "../components/App/App.modules.scss";
import Card from "../components/Card";
import AppContext from "../pages/context";


const Favorites: React.FC<any> = ({ onAddToFavorite, onAddToCart, onRemoveFromCart }) => {
    const { favorites } = React.useContext(AppContext);

    return (
        <div className={styles.content}>
            <h1>My marks</h1>
            <div className={styles.sneakers}> {favorites
                .map((item: any) =>
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        favorited={true}
                        onClickFavorite={(obj: any) => onAddToFavorite(obj)}
                        onClickPLus={(obj: any) => onAddToCart(obj)}
                        onClickMinus={(id: number) => onRemoveFromCart(id)}
                    />
                )}
            </div>
        </div>
    );
}
export default Favorites;