import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default class Error extends Component {
    render() {
        return (
            <Hero>
                <Banner title="404 not found"
                subtitle="page not found">
                    <Link to="/" className="btn=primary">Return home</Link>
                </Banner>
            </Hero>
        )
    }
}
