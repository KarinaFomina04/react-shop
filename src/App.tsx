import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [{ title:'Мужские Кроссовки NIke', price: '120', imageUrl: "/img/sneackers/1.jpg" },
{ title: 'Мужские Кроссовки NIke Air Max', price: '130', imageUrl: "/img/sneackers/2.jpg" },
{ title: 'Мужские Кроссовки NIke 3000', price: '175', imageUrl: "/img/sneackers/3.jpg" },
{ title: 'Мужские Кроссовки NIke Air Max Plus', price: '156', imageUrl: "/img/sneackers/4.jpg" }];


const App: React.FC = () => {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />
            <div className="content">
                <div className="titleWithSearch">
                    <h1>All</h1>
                    <div className="search">
                        <img width={18} height={18} src="/img/search.svg" alt="Search" />
                        <input placeholder="Search..." />

                    </div>
                </div>
                <div className="sneakers">
                    {arr.map(obj =>
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl} 
                            onClick={() => console.log(obj)}/>  
                    )}
                
                </div>
            </div>
        </div>
    )

}

export default App;
