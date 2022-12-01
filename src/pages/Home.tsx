import React from "react";
import Card from "../components/Card";
import styles from "../components/App/App.modules.scss"


const Home: React.FC<any> = ({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    onRemoveFromCart,
    isLoading
}) => {
    const renderItems = () => {
        const filteredItems = items.filter((item: any) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [...Array(10)] : filteredItems)
            .map((item: any, index: number) =>
                <Card
                    key={index}
                    onClickFavorite={(obj: any) => onAddToFavorite(obj)}
                    onClickPLus={(obj: any) => onAddToCart(obj)}
                    onClickMinus={(id: number) => onRemoveFromCart(id)}
                    added={cartItems.find((obj: any) => Number(obj.id) === Number(item.id))}
                    loading={isLoading}
                    {...item}
                />
            );
    }
    return (
        <div className={styles.content}>
            <div className={styles.titleWithSearch}>
                <h1>{searchValue ? `search by request: "${searchValue}"` : "All"}</h1>
                <div className={styles.search}>
                    <img width={18} height={18} src="/img/search.svg" alt="Search" />
                    {searchValue && <img
                        onClick={() => setSearchValue('')}
                        className={styles.clear}
                        src="/img/btn-remove.svg" alt="Clear"
                    />}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
                </div>
            </div>
            <div className={styles.sneakers}>{renderItems()}</div>
        </div>
    );
}
export default Home;