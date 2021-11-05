import React,{useRef,useEffect} from "react";
import Card from "./Card";

export default class Services extends React.Component{
    constructor(props){
        super(props);
        this.state={
            photos:[],
            isActive:"carousel-item active",
            nActive:"carousel-item"
        }
    }      
    componentDidMount(){
        fetch("http://localhost/php_rest_fztwebsite/api/post/read.php")
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    isLoaded:true,
                    photos:data,             
                });
            }
            );

    }

    render(){
        const {photos}=this.state;
        console.log(photos)
        return(
            <div className="row justify-content-center" id="services" style={{backgroundColor:"cornflowerblue"}}>
                <h1 style={{fontFamily:"'Oswald',sans-serif",textAlign:"center",marginTop:"10px",marginBotton:"10px"}}>TERAPİLER</h1>
               {photos.map((photo,index)=>
                    <Card data={photo} ></Card>

                    /* GSAP Intersection observer ve React.lazy code splitting araştırılıp
                    uygulanacak.*/ 
                )}       
            </div>
            
        )
    }



}