import React,{useEffect,useState} from 'react';
import axios from 'axios';

export const Video = () => {
    const[loading, setLoading] = useState(false);
    const[data,setData] = useState(null);

    useEffect(()=>{
        setLoading(true);
        axios({
            method:"GET",
            baseURL:"http://localhost:5000",
            url:"/video",
        })
            .then(({data}) =>{
                setData(data)
            })
                .catch(err => console.dir(err))
                .finally(() => setLoading(false))
    },[])

    return (
        <section>
            <div className='row' style={{marginTop:"89px"}}>
                {loading && "Obteniendo Video..."}
                {!!data && data.length > 0 ? data.map((Video)  => {
                    return(
                        <p style={{paddingLeft:"3%"}}>Title Video : {Video.title}
                        <p>
                        <iframe width="400" height="300" src={Video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </p>
                        </p>
                    )
                }):(<p></p>)}
            </div>
        </section>
    );
};