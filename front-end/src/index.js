import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import HomeLandingPage from './components/HomeLandingPage';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <HomeLandingPage />
    </Layout>
    <App />
  </React.StrictMode>
);
