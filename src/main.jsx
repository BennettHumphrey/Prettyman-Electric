import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AltContact from './components/AltContact'
import { subPages } from './resources/data';
import './index.css'
import SubPage from './components/SubPage';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/PioneerElectrical/",
    element: <Home  />,
  },
  {
    path: "/PioneerElectrical/subPage/:subPageId",
    element: <SubPage  />,
    loader: ({params}) => {
      return subPages[params.subPageId];
    }
  },
  {
    path: "/pioneerElectrical/contact",
  // element: <AltContact  />
  element: <Contact  />
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
