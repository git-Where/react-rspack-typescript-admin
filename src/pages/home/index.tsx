import React from "react";
import { Link } from "react-router-dom";
import style from './style.scss'
const Home = () => {
    return <div className={style}>Home
    <Link to="/404">404</Link></div>;
}

export default Home;