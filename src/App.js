import React from "react";
import { useAuth0,withAuthenticationRequired } from "@auth0/auth0-react";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './pages/Index'
import { Image } from './pages/Image'
import { Video } from './pages/Video'
import { Music } from './pages/Music'
import { Contact } from './pages/Contact'

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/image" element={<Image/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    )
  );
};

export default withAuthenticationRequired(App);
