import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignupPage';
import CourseListPage from './components/CourseListPage';
import CourseDetailsPage from './components/CourseDetailsPage';
import InternshipForm from './components/InternshipForm';

function App() {
  return (
    <Router>
      <TransitionGroup>
        <CSSTransition key={window.location.key} className="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path='/courses' element={<CourseListPage />} />
            <Route path="/courses/:id" component={<CourseDetailsPage />} />
            <Route path='/internshipForm' element={<InternshipForm />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
