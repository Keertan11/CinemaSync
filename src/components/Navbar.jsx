import React, { useState } from 'react';

export default function Navbar({ setActiveComponent, activeComponent }) {
    const getNavItemClass = (item) => {
        return `relative px-3 py-2 text-purple-100 hover:text-white transition-all duration-200 font-medium 
        ${activeComponent === item ? 'text-white before:absolute before:w-full before:h-0.5 before:bg-purple-400 before:bottom-0 before:left-0' : ''}`;
    };

    const [hamburger, sethamburger] = useState(true);

    const navItems = ["home", "movies", "tvshows", "watchlist"];

    return (
        <nav className="fixed w-full top-0 z-50 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-teal-900 to-slate-900 backdrop-blur-sm bg-opacity-80 animate-slideDown">
            <div className="container mx-auto px-8 py-5 flex justify-between lg:justify-around items-center">
                <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 hover:from-purple-300 hover:to-white transition-all duration-300 cursor-pointer animate-fadeIn" 
                     onClick={() => setActiveComponent("home")}>
                    CinemaSync
                </h1>
                <div className="hidden md:flex space-x-2">
                    {navItems.map((item, index) => (
                        <button 
                            key={item}
                            onClick={() => setActiveComponent(item)} 
                            className={`${getNavItemClass(item)} animate-fadeIn`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>
                <div className='md:hidden flex items-center'>
                    <button 
                        onClick={() => sethamburger(!hamburger)} 
                        className="text-white p-2 rounded-full bg-purple-400 hover:bg-purple-500 transition-all duration-300"
                    >
                        <div className="w-5 h-4 relative flex items-center justify-center">
                            <span className={`block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${hamburger ? 'rotate-0' : 'rotate-45'}`}></span>
                            <span className={`block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${hamburger ? 'opacity-100' : 'opacity-0'}`}></span>
                            <span className={`block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${hamburger ? 'rotate-0' : '-rotate-45'}`}></span>
                        </div>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden ${hamburger ? 'hidden' : 'block'} animate-fadeIn`}>
                <div className="px-8 py-4 space-y-3">
                    {navItems.map((item, index) => (
                        <button 
                            key={item}
                            onClick={() => {
                                setActiveComponent(item);
                                sethamburger(true);
                            }} 
                            className="block w-full text-left px-3 py-2 text-purple-100 hover:text-white transition-all duration-200 transform hover:translate-x-2 hover:scale-105 animate-slideRight"
                            style={{ 
                                animationDelay: `${index * 100}ms`,
                                opacity: 0,
                                animation: `slideInRight 0.5s ease-out ${index * 100}ms forwards`
                            }}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
