import React from 'react';
import Header from '../Components/Header';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className="left-nav"></section>
                <section className="main"></section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default Homelayout;