import React,{useRef,useEffect} from 'react';
import { useState } from 'react';
import {BiArrowBack} from "react-icons/bi";
import {TweenMax,Power3} from 'gsap';
import LightBox from './Lightbox';
import "../App.css";


function Card(props) {

    const [showModal,setShowModal]=useState(false);

    const openModal=()=>{
        setShowModal(prev => !prev);
    }

    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength ) return string;
        return `${string.substring(0, maxLength)} ...`;
    }
    
    let animatedItem=useRef(null);


    useEffect(()=>{

        TweenMax.to(
            animatedItem, 3,
            {
                opacity:1,
                y:-20,
                ease:Power3.easeOut
            }
        )

    },[])

    

    return (
        <div ref={el=>{animatedItem=el}} key={props.data.id} class="card" style={{width:"18rem",marginTop:"30px",marginLeft:"10px",opacity:"0"}}>
        <img src={"http://localhost/php_rest_fztwebsite/api/post/images/"+props.data.resim} class="card-img-top" alt="..." style={{width:"265px",height:"200px",paddingTop:"10px"}}/>
        <div class="card-body">
            <h5 class="card-title">{props.data.baslik}</h5>
            <p class="card-text">{truncateOverview(props.data.icerik,100)}</p>
            <button href="#" class="btn btn-primary" onClick={openModal}>Daha Fazla . . .</button>
        </div>
        {
                    showModal?(
                        
                        <LightBox>
                            
                          <div style={{overflowY:'scroll', left:"20%",boxShadow:"0 5px 16px",width:"800px",height:"600px",background:"#fff",color:"#000",position:"fixed"}}>
                            
                            <img src={"http://localhost/php_rest_fztwebsite/api/post/images/"+props.data.resim} style={{marginTop:"2%",marginBottom:"5%",marginLeft:"12%",width:"600px",height:"400px"}}></img>
                            <button className="close" onClick={openModal} style={{float:"right",marginLeft:"50px"}}><BiArrowBack/></button>
                            <h5 class="card-title" style={{fontFamily:"'Oswald',sans-serif",textAlign:"center",marginBottom:"2%"}}>{props.data.baslik}</h5>
                            <p style={{padding:"10px"}}>{props.data.icerik}</p>
                            
                            
                           </div> 
                         
                        </LightBox>
                        
                    )

                    :null
                }
        </div>

    )
}

export default Card
