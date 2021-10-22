import React from "react";

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
            <div className="row justify-content-center" id="services">
                <h1 style={{fontFamily:"'Oswald',sans-serif",textAlign:"center",marginTop:"10px",marginBotton:"10px"}}>TERAPİLER</h1>
               {photos.map((photo,index)=>
               <div key={photo.key} class="card" style={{width:"18rem",margin:"10px"}}>
                <img src={photo.urls.thumb} class="card-img-top" alt="..." style={{width:"265px",height:"200px",paddingTop:"10px"}}/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                )}       
            </div>
            
        )
    }



}