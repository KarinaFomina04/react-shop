import React from "react";
import styles from "../components/App/App.modules.scss"


const Favorites: React.FC<any> = ({searchValue, setSearchValue, onChangeSearchInput }) => {
    return (
        <div className={styles.content}>
            <h1>My marks</h1>
            {/* <div className={styles.titleWithSearch}>
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
            </div> */}
            <div className={styles.sneakers}> marks </div>
        </div>
    );
}
export default Favorites;