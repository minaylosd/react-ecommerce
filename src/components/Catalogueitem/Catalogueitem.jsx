import React from "react";
import Cartbtn from '../Cartbtn/Cartbtn';

const CatalogueItem = ({product}) => {
    return (
        <>
            <div data-id={product.id} className="w-[250px] mx-[35px] my-[25px] h-[300px] border border-itemgrey rounded-[3px]">
                <div className="mx-[10px] mt-[28px] mb-[41px] w-[228px] h-[130px]">
                    <img src={product.imgSrc} alt={product.title} />
                </div>
                <p className="max-w-[165px] mt-[12px] mb-[13px] ml-[14px] text-left text-sm leading-[16px] font-bold">{product.title}</p>
                <div className="flex justify-start items-center ml-[14px] mb-[14px]">
                    <Cartbtn />
                    <p className="text-sm font-normal ml-[15px]">{"$" + product.price}</p>
                </div>
            </div>
        </>
    )
}

export default CatalogueItem