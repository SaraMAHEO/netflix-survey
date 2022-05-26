import React, { useContext } from 'react';
import Header from "../components/Navigation";
import Logo from '../components/Logo';
import Results from '../components/Results';

const Profile = () => {
        return (
            <div className="container">
                <Header />
                <div className="content">
                    <Logo />
                    <Results />
                </div>
            </div >
        );
};

export default Profile;