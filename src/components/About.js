import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
    Navigation
  } from 'swiper';

  SwiperCore.use([Navigation]);


export default class About extends React.Component{

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
            <div className="row justify-content-center" id="about" style={{backgroundColor:"aqua"}}>
            <h1 style={{fontFamily:"'Oswald',sans-serif",textAlign:"center",paddingTop:"10px"}}>HAKKIMIZDA</h1>
            <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={true}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}>

            {
                photos.map((photo,index)=>
                <SwiperSlide>       
                <div class="card mb-3" style={{maxWidth:"700px",padding:"10px",marginLeft:"300px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={photo.urls.thumb} 
                    class="card-img-bottom" style={{width:"180px",height:"180px",borderRadius:"50%"}} alt="..."/>
                    </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{photo.id}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                </div>
                </div>  
                </SwiperSlide>       
                )
            }
            
            </Swiper>

           
            </div>
        )
    }



}