import React from "react";
import Cartlogo from './Cartlogo.svg';

const Cartnav = () => {
    return (
        <>
        <div>
            <div className="relative">
                <img src={Cartlogo} />
                <div className="flex justify-center items-center bg-blue text-white text-[10px] leading-[10px] rounded-full w-[13px] h-[13px] absolute top-[-6px] right-[-6px]">0</div>
            </div>
        </div>
            
        </>
    )
}

export default Cartnav