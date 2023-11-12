import React, { useLayoutEffect } from 'react'
import Home from './Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SubPage from './SubPage';
import { subPages } from '../resources/data';
import Contact from './Contact';

const App = () => {

const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return children
    } 

    

  return (
    <BrowserRouter>
      <Wrapper>

        <Routes>
          <Route path="/Electrical-Site-2-React/" element={<Home/>} />
          <Route path="/Electrical-Site-2-React/residential" element={<SubPage data={subPages.residential} />} />
          <Route path="/Electrical-Site-2-React/commercial" element={<SubPage data={subPages.commercial} />} />
          <Route path="/Electrical-Site-2-React/contact" element={<Contact />} />
        </Routes>

      </Wrapper>
    </BrowserRouter>
  )
}

export default App