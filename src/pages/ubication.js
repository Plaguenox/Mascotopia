import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import MapComponent from '../components/map';

const UbicationPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <MapComponent />
            <Footer />
        </div>
    );
};

export default UbicationPage;
