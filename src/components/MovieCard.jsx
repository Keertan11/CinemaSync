import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
    const [isInWatchlist, setIsInWatchlist] = useState(false);

    useEffect(() => {
        const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        setIsInWatchlist(watchlist.some(item => item.id === movie.id));
    }, [movie.id]);

    const handleWatchlist = (e) => {
        e.stopPropagation();
        const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        
        if (isInWatchlist) {
            const newWatchlist = watchlist.filter(item => item.id !== movie.id);
            localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
            setIsInWatchlist(false);
        } else {
            watchlist.push(movie);
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            setIsInWatchlist(true);
        }
    };

    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const year = new Date(movie.release_date).getFullYear();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="relative group">
            <div className="aspect-[2/3] rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5">
                <button
                    onClick={handleWatchlist}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-purple-600/80 hover:bg-purple-600 
                             transition-colors duration-300 transform opacity-0 group-hover:opacity-100"
                >
                    {isInWatchlist ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )}
                </button>
                <img
                    src={imageUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full 
                                    group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-white mb-2">{movie.title}</h3>
                    <p className="text-sm text-purple-200">{year} • {movie.vote_average.toFixed(1)} ⭐</p>
                </div>
            </div>
        </motion.div>
    )
}

export default MovieCard