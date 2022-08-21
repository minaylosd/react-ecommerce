import React from "react";

const ShoppingCart = () => {
    return (
        <>
            <div className="w-[410px] border-l border-grey ">
                <div className="w-[330px] p-[40px]">
                    <p className="text-left text-[21px] leading-[21px] font-bold mb-[30px]">My basket</p>
                    <div className="sneaker flex w-[330px] h-[100px]">
                        <img className="w-[90px] h-[51px] mx-[5px] mt-[25px] mb-[24px]" src="./item1.png" alt="sneaker" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart