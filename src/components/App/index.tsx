import React from "react";
import Card from "../Card";
import Drawer from "../Drawer";
import Header from "../Header";
import styles from './App.modules.scss';


const App: React.FC = () => {
    const [items, setItems] = React.useState([]);
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

    return (
        <div className={styles.wrapper}>
            {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
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
                    {items.map((obj: any) =>
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            onClickFavorite={() => console.log('Add to favorites')}
                            onClickPLus={() => console.log('Click plus')} />
                    )}

                </div>
            </div>
        </div>
    )

}

export default App;
