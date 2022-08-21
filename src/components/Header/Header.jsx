import React from "react";
import Shoplogo from './Shoplogo.svg';
import Cartnav from '../Cartnav/Cartnav';


const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center pt-[26px] pb-[22px] pl-[20px] pr-[30px] tablet:px-[30px] desktop:px-[30px] hd:px-[30px] border-b border-grey">
                <div>
                    <img src={Shoplogo} />
                </div>
                <div>
                    <Cartnav />
                </div>
            </div>
        </>
    )
}

export default Header