import React from 'react';
import { BrowserRouter as Router,
         Route,
         Routes } from 'react-router-dom';

import { PageWrapper, Clicker, Getter, NotFound, DarkMode } from './components';
import {DarkModeProvider} from './context/DarkMode';


const App = () => {
    return (
        <DarkModeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<PageWrapper />}>
                        <Route path="/" element={<Clicker />}/>
                        <Route path="/getter" element={<Getter />}/>
                        <Route path="/darkmode" element={<DarkMode />}/>
                        <Route path="*" element={<NotFound />}/>
                    </Route>
                </Routes>
            </Router>
        </DarkModeProvider>
    )
};

export default App;