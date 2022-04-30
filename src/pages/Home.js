import React, { useContext } from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";
import { UserContext } from "../context/UserContext";
import { login } from "../context/utils/login";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            < Logo />
            <div className="countries">
                <h3>Bienvenue {user}</h3>
            </div>
            <Navigation />
            <Countries />
        </div >
    );
};

export default Home;