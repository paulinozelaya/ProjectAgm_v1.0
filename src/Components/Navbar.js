import React from 'react';
import logo from '../assets/image/logo.webp'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const { logout , user} = useAuth0();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
                <img src={logo} width="30" height="30" alt=""/>
            </a>
                <a class="navbar-brand" href="/">Video Tutorial</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item"><Link to="/">Home</Link></li>
                    <li class="nav-item"><Link to="/image">Image</Link></li>
                    <li class="nav-item"><Link to="/video">Video</Link></li>
                    <li class="nav-item"><Link to="/music">Music</Link></li>
                    <li class="nav-item"><Link to="/contact">Contact</Link></li>
                    <li class="nav-item"><button type="button" class="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button></li>
                    <li><a class="disabled text-white"><img src={user.picture} width="30" height="30"/>{user.name}</a></li>

                        {/* <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> */}
                    {/* <li class="nav-item">
                        <a class="nav-link" href="/image">Image</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/video">Video</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/music">Music</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                    <li>
                        <button type="button" class="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled text-white"><img src={user.picture} width="30" height="30"/>{user.name}</a>
                    </li> */}
                    </ul>
                </div>
</nav>
        </div>
    );
};