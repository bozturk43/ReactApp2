import React from "react";

export default class Hero extends React.Component{

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
        const {photos,isActive,nActive}=this.state;
        return(
            <div className="hero" id="hero">
                <div id="carouselExampleSlidesOnly" class="carousel-slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    {photos.map((photo,index)=>
                    <div key={index} className={index===0 ? isActive:nActive} data-interval="1000" style={{maxHeight:"500px"}}>
                    <img src={photo.urls.small} class="d-block w-100" alt="..."/>
                  </div>
                    )}
                
                </div>
                </div>
            </div>
        )
    }



}