import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About';

export default function Sample(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to = "/about">About</Link></li>
                    </ul>
                </nav>

                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                </Routes>   
            </div>
            <div>-------------------------------------------------------------</div>
        </Router>
    )
}