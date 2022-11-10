import React from "react";
import Card from "../Card";
import Drawer from "../Drawer";
import Header from "../Header";
import styles from './App.modules.scss';


const App: React.FC = () => {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState<TItem[]>([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://6366ecd1f5f549f052ce631b.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json)
            });
    }, []);

    type TItem = { 
        title: string; 
        imageUrl: string; 
        price: number; 
    };

    const onAddToCart = (obj: TItem) => {
        setCartItems([...cartItems, obj]);
    };
    console.log(cartItems)
    return (
        <div className={styles.wrapper}>
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className={styles.content}>
                <div className={styles.titleWithSearch}>
                    <h1>All</h1>
                    <div className={styles.search}>
                        <img width={18} height={18} src="/img/search.svg" alt="Search" />
                        <input placeholder="Search..." />

                    </div>
                </div>
                <div className={styles.sneakers}>
                    {items.map((item: any) =>
                        <Card
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onClickFavorite={() => console.log('Add to favorites')}
                            onClickPLus={(obj: any) => onAddToCart(obj)} />
                    )}

                </div>
            </div>
        </div>
    )

}

export default App;
