import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService'

export const Image = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        ProductService.getLimit()
            .then(({ data }) => {
              setData(data)
            })
            .catch(err => console.dir(err))
            .finally(() => setLoading(false))
    }, [])

    return (  
        <section>
        <div className="row" style={{paddingLeft:"15%",marginTop:"18px"}}>
        {loading && <p style={{padding:"0 350px",marginTop:"160px"}}><img src={require('../assets/image/progress.gif')} width={250} height={250}/></p>}
        {!!data && data.length > 0 ? data.map((product) => {
            return(
                <div class="card" style={{width: "18rem",marginLeft:"2%"}}>
                <img class="card-img-top" src={product.image} alt="Card image cap" style={{height:"150px",width:"150px",padding:"10px",marginLeft:"27%",justifyContent:"center"}}/>
                <div class="card-body" style={{padding:"0"}}>
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                </div>
                </div>
            )   
          }):(<p></p>)
        }
        </div> 
        
      </section>
    )
}
