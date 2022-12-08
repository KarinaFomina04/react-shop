import React from "react";
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import Drawer from "../Drawer";
import Header from "../Header";
import styles from './App.modules.scss';

import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";
import AppContext from "../../pages/context";
import { TItem } from "../../type";


const App: React.FC = () => {

    const url = process.env.REACT_APP_API_URL;

    const [items, setItems] = React.useState<any>([]);
    const [cartItems, setCartItems] = React.useState<TItem[]>([]);
    const [favorites, setFavorites] = React.useState<TItem[]>([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect( () => {
        async function fetchData() {
            setIsLoading(true);
            const itemsResponse = await axios.get(`${url}/items`);
            const cartResponse = await axios.get(`${url}/cart`);
            const favoritesResponse = await axios.get(`${url}/favorites`);

            setIsLoading(false);

            setItems(itemsResponse.data);
            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
        }
        fetchData();
    }, []);



    const onAddToCart = (obj: TItem) => {
        try {
            if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
                axios.delete(`${url}/cart/${obj.id}`);
                setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post(`${url}/cart`, obj);
                setCartItems(prev => [...prev, obj]);
            };
        } catch (error) {

        }
    };

    const onRemoveItem = (id: number) => {
        axios.delete(`${url}/cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const onAddToFavorite = async (obj: TItem) => {
        try {
            if (favorites.find(item => item.id === obj.id)) {
                axios.delete(`${url}/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter(item => item.id !== obj.id));
            } else {
                const { data } = await axios.post(`${url}/favorites/`, obj);
                setFavorites(prev => [...prev, data]);
            }
        } catch (error) {
            alert('Could not add to favorites');
        }
    };

    const onRemoveFromCart = (id: number) => {
        setCartItems(prev => prev.filter((item) => item.id !== id));
    };

    const onChangeSearchInput = (event: any) => {
        setSearchValue(event.target.value);
    }

    return (
        <AppContext.Provider value={{items, cartItems, favorites}}>
            <div className={styles.wrapper}>
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
            <Header onClickCart={() => setCartOpened(true)} />
            <Routes>
                <Route path="/" element={<Home
                    items={items}
                    cartItems={cartItems}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                    isLoading={isLoading} 
                    />}> 
                </Route>
                <Route path="/favorites" element={<Favorites
                    items={favorites}
                    searchValue={searchValue}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                />}>
                </Route>
            </Routes>
        </div>
    </AppContext.Provider>
    )

}

export default App;
