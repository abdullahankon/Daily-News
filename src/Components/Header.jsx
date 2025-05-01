import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-3'>
            <img className='w-[350px]' src={logo} alt="" srcset="" />
            <p>Journalism Without Fear and Favour.</p>

        </div>
    );
};

export default Header;