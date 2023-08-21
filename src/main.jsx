import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact'
import { subPages } from './resources/data';
import './index.css'
import SubPage from './components/SubPage';

const router = createBrowserRouter([
  {
    path: "/Pioneer-Electrical/",
    element: <Home  />,
  },
  {
    path: "/Pioneer-Electrical/subPage/:subPageId",
    element: <SubPage  />,
    loader: ({params}) => {
      return subPages[params.subPageId];
    }
  },
  {
    path: "/pioneer-electrical/contact",
  element: <Contact  />
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
