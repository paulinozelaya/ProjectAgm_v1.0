import React from 'react';
import Reproductor from 'react-audio-player'

export const Music = () => {
    return (
        <div>
            <div className='row' style={{padding:"100px 250px"}}>
                <h3>  Audio 1
                    <p>
                        <Reproductor
                        src={require('../assets/music/comedia.wav')}
                        controls
                        />
                    </p>
                </h3>
                <p style={{padding:"0px 80px"}}>
                    <h3>  Audio 2
                        <p>
                            <Reproductor
                            src={require('../assets/music/comedia.wav')}
                            controls
                            />
                        </p>
                    </h3>
                </p>
            </div>
        </div>
    );
};