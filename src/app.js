import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import StartGame from './components/StartGame';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/start-game" element={<StartGame />} />
      </Routes>
    </div>
  );
}

export default App;









// import { createBrowserRouter,RouterProvider,  Outlet } from "react-router-dom";
// import Header from "./components/Header";
// import Play  from "./components/Play";
// import Start from "./components/Start";
// import ReactDom from "react-dom/client";


// const Applayout = ()=>{
//     return(
//         <div >
//             <Header/>
//             <Outlet/>
//         </div>
//     );
// };

// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element:<Applayout/>,
//         children:[
//             {
//                 path:"/",
//                 element:<Play/>
//             },
//             {
//                 path:"/start",
//                 element:<Start/>
//             }
//         ],
//         errorElement: <Error/>
//     },
// ]);

// const root =  ReactDom.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={appRouter} />);
