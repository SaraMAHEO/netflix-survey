import React, { useContext } from 'react';
import Header from "../components/Navigation";
import Movies from "../components/Movies";
import { UserContext } from "../context/UserContext";
import Logo from '../components/Logo';

const Home = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="container">
            <Header />
            <div className="content">
                <Logo />
                <div className="movies">
                    <h3>Bienvenue {user}</h3>
                </div>
                <Movies />
            </div>
        </div >
    );
};

export default Home;