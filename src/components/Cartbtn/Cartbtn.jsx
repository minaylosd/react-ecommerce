import React from "react";
import Cart from './Cartlogo.svg';

const Cartbtn = () => {
    return (
        <>    
            <div className="flex justify-center items-center w-[40px] h-[40px] bg-blue cursor-pointer hover:bg-blue-500 transition-opacity">
                <img src={Cart} />
            </div> 
        </>
    )
}

export default Cartbtn