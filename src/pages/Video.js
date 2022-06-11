import React from 'react';
import ReactPlayer from 'react-player';

export const Video = () => {

    return (
        <section>
            <div className='row' style={{marginTop:"89px"}}>
                        <p className="row">
                        
                        <p>
                        <h6 style={{marginLeft:"40%"}}> Titulo:  Porta</h6>
                            {/* <iframe width="400" height="300" src={Video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        <ReactPlayer url='https://www.dailymotion.com/embed/video/x8bl214' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"40%"}}/>
                        </p>
                        
                        <p>
                        <h6  style={{marginLeft:"70%"}}> Titulo:  Porta</h6>
                        <ReactPlayer url='https://www.dailymotion.com/embed/video/x8bl214' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"70%"}}/>
                        </p>
                        </p>
            </div>
        </section>
    );
};