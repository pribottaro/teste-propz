import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

import { useEffect, useState } from "react";
import axios from "axios";

export default function Ofertas() {
    const [users, setUsers] = useState([]);    

    useEffect(() => {
        axios
        .get("./produtos.json")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));
    }, []);  

    return (        
        <div className="slider-produtos">
            <OwlCarousel nav={true} items={3} margin={8} autoplay={true} interval={1500} loop={true}> 
                    {users.map((user, index) => (                                         
                        <div className="internal-item" key={index}>
                            <img className="prod-img" src= {'images/shampoo.jpg'}/>
                            <div className="title">
                                <span>{user.titulo}</span>
                                <span> {user.subtitulo}</span>
                            </div>
                            <div className="description">
                                <div className="desc-left">
                                        <p>{user.parcela}x <span>{user.valorParcela}</span><br/>
                                        à vista <span>{user.valor}</span></p>
                                </div>
                                <div className="desc-right">
                                        <img src="images/cards.png" alt="Cartões Master e Visa"/>
                                </div>                                        
                            </div>    
                        </div>                        
                ))}
            </OwlCarousel>
        </div>  
    );
  }
  