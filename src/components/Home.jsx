import React, { useEffect, useState } from 'react'
import { getMovies } from '../api/api';
import { motion } from "framer-motion";
import MovieCard from './MovieCard';

const Home = ({ setActiveComponent }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getMovies("discover");
            setMovies(moviesData.slice(0, 8));
        };
        fetchMovies();
    }, []);

    return (
        <div className="relative bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-teal-900 to-slate-900">
            {/* Background Image Layer */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3"
                    alt="Background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            <div className="relative min-h-screen">
                {/* Modern Grid Pattern Background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHptMzAgMGwzMCAzMEwzMCA2MEwwIDMweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBmaWxsPSJub25lIi8+PC9zdmc+')] pattern-repeat" />
                </div>

                {/* Hero Content */}
                <main className="relative container mx-auto px-4 md:px-6 py-20 md:py-32">
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-8 md:space-y-8 max-w-4xl mx-auto text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                            CinemaSync
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-purple-100 leading-relaxed">
                            Discover the latest movies and TV shows, bookmark your favorites, and sync your watchlist across all your devices.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveComponent("movies")}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 
                                text-white text-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 
                                transition-all duration-300 cursor-pointer" >
                                Discover Movies
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveComponent("tvshows")}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 
                                text-white text-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 
                                transition-all duration-300 cursor-pointer" >
                                Discover TvShows
                            </motion.button>
                        </div>
                    </motion.section>

                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
                        >
                            Popular Choices
                        </motion.div>

                        <motion.section
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </motion.section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home