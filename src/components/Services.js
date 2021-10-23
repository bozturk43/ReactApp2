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
        fetch("https://api.unsplash.com/photos/?client_id=qXevhspOUxOCExHkzs1jrl4ewvtpv-TuuwdK4EhREhk")
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