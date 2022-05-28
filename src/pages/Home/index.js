import React, { useState } from "react";
import Header from "../../components/Header/index";
import ApiMovies from "../../components/ApiMovies/index";
import Footer from "../../components/Footer/index";
import { Context } from "../../context";
import "./style.css";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <Context.Provider value={{ search, setSearch }}>
      <Header />
      <ApiMovies />
      <Footer />
    </Context.Provider>
  );
};

export default Home;
