import React from 'react';

export const Home = () => {
    return (
        <div className='row'>
            <div style={{marginTop:"10px",marginLeft:"80px"}}>
                <h3>UNI-RUPAP</h3>
                <iframe src="https://embed.waze.com/iframe?zoom=16&lat=12.137719&lon=-86.223953&ct=livemap" width="600" height="450" allowfullscreen></iframe>
            </div>
            <div>
                <h3 style={{marginLeft:"80px",marginTop:"150px"}}>Proyecto Aplicaciones Graficas</h3>
                <img src={require("../image/logo.webp")} style={{padding:"0",height:"100px",marginLeft:"200px"}}/>
                <h4 style={{padding:"0px",marginLeft:"180px"}}>Integrantes: </h4>
                <h6 style={{padding:"0px 150px"}}>* Isela del Rosario Ramos Mercado <br/>
                    * Paulino Jose Zelaya Toruño <br/>
                    * Jean Carlos Zeas Sequeira</h6>
            </div>
        </div>
    );
};