import React, { useEffect, useState, useCallback } from 'react'
import { getTvShows, searchTvShows } from '../api/api'
import { motion } from "framer-motion"
import MovieCard from './MovieCard'

const TvShows = () => {
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query.trim()) {
        setIsLoading(true);
        const searchResults = await searchTvShows(query);
        setShows(searchResults);
        setIsLoading(false);
      } else {
        const showsData = await getTvShows();
        setShows(showsData);
      }
    }, 500),
    []
  );

  useEffect(() => {
    const fetchShows = async () => {
      setIsLoading(true);
      const showsData = await getTvShows();
      setShows(showsData);
      setIsLoading(false);
    };
    fetchShows();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <div className="relative bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-teal-900 to-slate-900">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative min-h-screen">
        {/* Modern Grid Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHptMzAgMGwzMCAzMEwzMCA2MEwwIDMweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBmaWxsPSJub25lIi8+PC9zdmc+')] pattern-repeat" />
        </div>

        {/* Main Content */}
        <main className="relative container mx-auto px-4 md:px-6 py-32">
          <div className="flex items-center justify-between mb-12 gap-4 flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
            >
              TV Shows
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-1 max-w-md"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for TV shows..."
                className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-purple-500 transform-gpu"
              />
            </motion.div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {shows.map((show) => (
                <MovieCard key={show.id} movie={show} />
              ))}
            </motion.section>
          )}
        </main>
      </div>
    </div>
  )
}

// Debounce helper function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default TvShows