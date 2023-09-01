import React, { useLayoutEffect } from 'react'
import Projects from './Projects/Projects';
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
          <Route path="/PioneerElectrical/" element={<Home/>} />
          <Route path="/PioneerElectrical/projects" element={<Projects/>} />
          <Route path="/PioneerElectrical/residential" element={<SubPage data={subPages.residential} />} />
          <Route path="/PioneerElectrical/commercial" element={<SubPage data={subPages.commercial} />} />
          <Route path="/PioneerElectrical/industrial" element={<SubPage data={subPages.industrial} />} />
          <Route path="/PioneerElectrical/legal" element={<SubPage data={subPages.legal} />} />
          <Route path="/PioneerElectrical/contact" element={<Contact />} />
          <Route path="/PioneerElectrical/projects" element={<Projects />} />
        </Routes>

      </Wrapper>
    </BrowserRouter>
  )
}

export default App