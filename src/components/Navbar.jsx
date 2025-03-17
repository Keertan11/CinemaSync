import React from 'react';

export default function Navbar({ setActiveComponent, activeComponent }) {
    const getNavItemClass = (item) => {
        return `relative px-3 py-2 text-purple-100 hover:text-white transition-all duration-200 font-medium 
        ${activeComponent === item ? 'text-white before:absolute before:w-full before:h-0.5 before:bg-purple-400 before:bottom-0 before:left-0' : ''}`;
    };

    return (
        <nav className="fixed w-full top-0 z-50 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-teal-900 to-slate-900 backdrop-blur-sm bg-opacity-80">
            <div className="container mx-auto px-8 py-5 flex justify-between lg:justify-around items-center">
                <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 hover:from-purple-300 hover:to-white transition-all duration-300 cursor-pointer" onClick={() => setActiveComponent("home")}>
                    CinemaSync
                </h1>
                <div className="hidden md:flex space-x-2">
                    <button onClick={() => setActiveComponent("home")} className={getNavItemClass("home")}>Home</button>
                    <button onClick={() => setActiveComponent("movies")} className={getNavItemClass("movies")}>Movies</button>
                    <button onClick={() => setActiveComponent("tvshows")} className={getNavItemClass("tvshows")}>TV Shows</button>
                    <button onClick={() => setActiveComponent("watchlist")} className={getNavItemClass("watchlist")}>Watchlist</button>
                </div>
            </div>
        </nav>
    );
}
