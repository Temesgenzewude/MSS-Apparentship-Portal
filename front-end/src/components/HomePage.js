import React from 'react';
import HomeLandingPage from './HomeLandingPage';
import Navbar from '../layouts/Navbar';
import Layout from '../layouts/Layout';

function HomePage() {
    return (
        <>
            <Layout>
                <Navbar />
                <HomeLandingPage />
            </Layout>
        </>
    )
}

export default HomePage;