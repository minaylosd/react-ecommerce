import React from "react";
import CatalogueItem from '../Catalogueitem/Catalogueitem';
import data from '../../data.json';

const Grid = () => {


    const products = data;

    return (
        <>
            {products?.length > 0
                    ? (
                        <div className="flex flex-wrap w-[320px] tablet:w-[640px] desktop:w-[640px] hd:w-[960px] mx-auto mt-[60px]">
                            {products.map((product, i) => (
                                <div key={i}>
                                    <CatalogueItem product = {product} />
                                </div>
                                
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>Somethings wrong, please try later.</h2>
                        </div>
                    )
            }
        </>
    )
}

export default Grid