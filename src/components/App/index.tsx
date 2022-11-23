import React from "react";
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import Drawer from "../Drawer";
import Header from "../Header";
import styles from './App.modules.scss';

import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";


const App: React.FC = () => {

    const url = process.env.REACT_APP_API_URL;

    const [items, setItems] = React.useState<any>([]);
    const [cartItems, setCartItems] = React.useState<TItem[]>([]);
    const [favorites, setFavorites] = React.useState<TItem[]>([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        axios.get(`${url}/items`).then(res => {
            setItems(res.data);
        });
        axios.get(`${url}/cart`).then(res => {
            setCartItems(res.data);
        });
    }, []);

    type TItem = {
        id: number;
        title: string;
        imageUrl: string;
        price: number;
    };

    const onAddToCart = (obj: TItem) => {
        axios.post(`${url}/cart`, obj);
        setCartItems(prev => [...prev, obj]);
    };

    const onRemoveItem = (id: number) => {
        axios.delete(`${url}/cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const onAddToFavorite = (obj: TItem) => {
        axios.post(`${url}/favorites/`, obj);
        setFavorites(prev => [...prev, obj]);
    };

    const onRemoveFromCart = (id: number) => {
        setCartItems(prev => prev.filter((item) => item.id !== id));
    };

    const onChangeSearchInput = (event: any) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className={styles.wrapper}>
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
            <Header onClickCart={() => setCartOpened(true)} />
            <Routes>
                <Route path="/" element={<Home
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart} />}>
                </Route>
                <Route path="/favorites" element={<Favorites
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                />}>
                </Route>
            </Routes>
        </div>
    )

}

export default App;
