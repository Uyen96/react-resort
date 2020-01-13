import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero" >
            <Banner title="our room">
            <Link to="/" className="btn-primary">retum home</Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>
    )
}

export default Rooms;
