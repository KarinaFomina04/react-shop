import React from "react";
import Card from "../Card";
import Drawer from "../Drawer";
import Header from "../Header";
import styles from './App.modules.scss';


const App: React.FC = () => {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState<TItem[]>([]);
    const [searchValue, setSearchValue] = React.useState('');
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
        id: number;
        title: string;
        imageUrl: string;
        price: number;
    };

    const onAddToCart = (obj: TItem) => {
        setCartItems(prev => [...prev, obj]);
    };

    const onRemoveFromCart = (id: number) => {
        setCartItems(prev => prev.filter((item) => item.id !== id));
    };
    const onChangeSearchInput = (event: any) => {
        setSearchValue(event.target.value); 
    }

    console.log(cartItems)
    return (
        <div className={styles.wrapper}>
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className={styles.content}>
                <div className={styles.titleWithSearch}>
                    <h1>{searchValue ? `search by request: "${searchValue}"` : "All"}</h1>
                    <div className={styles.search}>
                        <img width={18} height={18} src="/img/search.svg" alt="Search" />
                        <img className={styles.clear} width={11} height={11} src="/img/btn-remove.svg" alt="Close" />
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />

                    </div>
                </div>
                <div className={styles.sneakers}>
                    {items.map((item: any) =>
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onClickFavorite={() => console.log('Add to favorites')}
                            onClickPLus={(obj: any) => onAddToCart(obj)}
                            onClickMinus={(id: number) => onRemoveFromCart(id)} />
                    )}

                </div>
            </div>
        </div>
    )

}

export default App;
