import React,{useRef} from 'react';
import{useIntersection} from 'react-use';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import Header from './Navbar';
import gsap from 'gsap';



const App=()=>{

  const sectionRef=useRef(null);

  const intersection = useIntersection(sectionRef,{

    root:null,
    rootMargin:"0px",
    threshold:0.1

  });

  const fadeIn=element=>{

    gsap.to(element,1,{
      opacity:1,
      y:-60,
      ease:'power4.out',
      stagger:{
        amount:.3
      }
    })

    console.log("fade in calıstı")

  }

  const fadeOut=element=>{
    gsap.to(element,1,{
      opacity:0,
      y:-20,
      ease:'power4.out',
    })

    console.log("fadeout calıstı")
  }

  intersection&&intersection.intersectionRatio < 0.1 ?
  
  fadeOut(".servicesdiv")
  :
  fadeIn(".servicesdiv");  


  return (  
      <>    
    <div><Header></Header></div>
    <div><Hero></Hero></div>
    <div  ref={sectionRef} className="servicesdiv" style={{marginTop:"60px"}}><Services></Services></div>
    <div><About></About></div>
    </>
    
  );

}

export default App;




