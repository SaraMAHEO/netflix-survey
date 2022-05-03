import React, { useContext } from 'react';
import Header from "../components/Navigation";
import Countries from "../components/Movies";
import { UserContext } from "../context/UserContext";
import Logo from '../components/Logo';

const Home = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="container">
            <Header />
            <div className="content">
                <Logo />
                <div className="countries">
                    <h3>Bienvenue {user}</h3>
                </div>
                <Countries />
            </div>
        </div >
    );
};

export default Home;