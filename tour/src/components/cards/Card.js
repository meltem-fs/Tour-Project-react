import React from 'react'
import {data} from "../../helper/data"
import "./Card.css"

const Card = () => {
  return (
    <div className='main'>
       {data.map((item) => {const {id,title,image,desc}=item;
        return (
          <div className="container">
            <h2>{title}</h2>
            <div className="city">
              <img src={image} alt="img" id={id} />
              <div className="description">
                <p className="desc">{desc}</p>
              </div>
            </div>
          </div>
        );
  })}
      
      

          </div>
  );
}

export default Card