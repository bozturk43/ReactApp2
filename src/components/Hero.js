import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
    Autoplay,
    Navigation
  } from 'swiper';

  SwiperCore.use([Navigation,Autoplay]);


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
            <div className="row justify-content-center" id="hero">
                 <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{delay:5000}}
                  navigation={false}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}>
                
                    {photos.map((photo,index)=>
                    <SwiperSlide>
                    <div className="row justify-content-center" style={{maxHeight:"700px"}} >
                    <img src={photo.urls.small} class="d-block w-100" alt="..."/>
                    </div>
                    </SwiperSlide>
                                    )}
                
            </Swiper>
            </div>

        )
    }



}