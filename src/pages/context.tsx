import React from "react";
import { TItem } from "../type";

const AppContext = React.createContext<{favorites: TItem[], items: any, cartItems: TItem[]}>({favorites: [], items: [], cartItems: []}); //UseContext

export default AppContext;