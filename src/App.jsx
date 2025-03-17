import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import WatchList from "./components/WatchList";

function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-default">
      <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      {activeComponent === "home" && <Home setActiveComponent={setActiveComponent} />}
      {activeComponent === "movies" && <Movies />}
      {activeComponent === "tvshows" && <TvShows />}
      {activeComponent === "watchlist" && <WatchList />}
      <Footer />
    </div>
  );
}

export default App;
