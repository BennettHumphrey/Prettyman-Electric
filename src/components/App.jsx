import React, { useLayoutEffect } from 'react'
import Home from './Home';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useLocation } from 'react-router-dom';
import SubPage from './SubPage';
// import { subPages } from '../resources/data';
import Contact from './Contact';
import { useEffect } from 'react';
import { fetchData } from '../functions/fetchData';
import { useState } from 'react';
import { createNavOptions } from '../functions/createNavOptions';

const App = () => {

  const [contactInfo, setContactInfo] = useState({ email: "Loading", phone: "Loading" });
  const [subPages, setSubPages] = useState();
  const [navOptions, setNavOptions] = useState();

  // TODO: Auto-scroll-up when changing pages

  useEffect(() => {
    fetchData(setContactInfo, '*[_type == "contactInfo"][0]');
  }, []);

  useEffect(() => {
    fetchData(setSubPages, '*[_type == "subPages"]');
  }, []);

  useEffect(() => {
    console.log(`subPages data: ${JSON.stringify(subPages)}`)
    subPages && setNavOptions(createNavOptions(subPages))
  }, [subPages])


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home contactInfo={contactInfo} navOptions={navOptions} />,
  },
  {
    path: "/subPage/:subPageId",
    element: <SubPage contactInfo={contactInfo} navOptions={navOptions} />,
    loader: ({params}) => {

      //Filters the array down to just the index that contains a matching page name
      let page = subPages.filter(data => {
        return data.pageTitle == params.subPageId
      })

      //Return the object with the correct subPage data, within the larger object
      // console.log(`Loader data: ${JSON.stringify(page[0])}`)
      return page[0];
    }
  },
  {
    path: "/contact",
  element: <Contact contactInfo={contactInfo} navOptions={navOptions} />
},
]);



  return (
        <RouterProvider router={router} />
  )
}

export default App