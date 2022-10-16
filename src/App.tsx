import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const App: React.FC = () => {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            <div className="content">
                <div className="titleWithSearch">
                    <h1>All</h1>
                    <div className="search">
                        <img width={18} height={18} src="/img/search.svg" alt="Search" />
                        <input placeholder="Search..." />

                    </div>
                </div>
                <div className="sneakers">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        </div>
    )

}

export default App;
