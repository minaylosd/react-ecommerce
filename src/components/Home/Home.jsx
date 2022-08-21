import React from "react";
import Header from '../Header/Header';
import Grid from '../Grid/Grid';
import ShoppingCart from "../Shoppingcart/ShoppingCart";

const Home = () => {
    return (
        <>
            <Header />
                <div className="flex flex-wrap">
                    <Grid />
                    <ShoppingCart />
                </div>
            
        </>
    )
}

export default Home