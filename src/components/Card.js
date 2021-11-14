import React,{useRef,useEffect} from 'react';
import {TweenMax,Power3} from 'gsap';

function Card(props) {

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
            <p class="card-text">{props.data.icerik}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>

    )
}

export default Card
