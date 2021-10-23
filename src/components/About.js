import React from "react";


export default class About extends React.Component{

    render(){
        return(
            <div className="row justify-content-center" id="about" style={{backgroundColor:"aqua"}}>
            <h1 style={{fontFamily:"'Oswald',sans-serif",textAlign:"center",paddingTop:"10px"}}>HAKKIMIZDA</h1>
            <div class="card mb-3" style={{maxWidth:"700px",padding:"10px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNjkzMTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTYzNTAxMDc5Mg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200" 
                    class="card-img-bottom" style={{width:"180px",height:"180px",borderRadius:"50%"}} alt="..."/>
                    </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                </div>
                </div>  
            </div>
        )
    }



}