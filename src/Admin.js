import axios from 'axios';
import React,{useRef,useState} from 'react';

const Admin=()=>{

    const[baslik,setBaslik]=useState("");
    const[icerik,setIcerik]=useState("");
    const[yazar,setYazar]=useState("");
    const[path,setPath]=useState("");
    
   

    const handleBaslik=(e)=>{
        setBaslik(e.target.value);
    }

    const handleIcerik=(e)=>{
        setIcerik(e.target.value);
    }

    const handleYazar=(e)=>{
        setYazar(e.target.value);
       
    }

    const handleResim=(e)=>{
        setPath(e.target.files[0]);
        console.log(e.target.files)
        
        
    }

    const postArray={
        baslik:baslik,
        icerik:icerik,
        yayinci:yazar,
        resim:path
      
    }

    const postEkle=(e)=>{
        e.preventDefault();
        console.log("Fonksiyon Çalıştı");
        console.log(postArray)
        
        const data = new FormData();
        data.append('baslik',baslik);
        data.append('icerik',icerik);
        data.append('yazar',yazar);
        data.append('file',path);

        console.log(path)
       axios.post("http://localhost/php_rest_fztwebsite/api/post/create.php",data)
        .then(response=>{console.log(response)})
        .catch(error=>{
            console.log(error)
        });
    }
    return(
        
    <div>
        
        <h1>Admin Sayfası</h1>
        <form method="post" action="http://localhost/php_rest_fztwebsite/api/post/create.php"  encType="multipart/form-data" onSubmit={postEkle} >
            <label>Konu Baslıgı</label><br></br>
            <input type="text" name="baslik" onChange={handleBaslik}></input><br></br>
            <label>İcerik</label><br></br>
            <input type="text" name="icerik" onChange={handleIcerik}></input><br></br>
            <label>Yazar</label><br></br>
            <input type="text" name="yazar" onChange={handleYazar}></input><br></br>
            <input type="file" name="file" onChange={handleResim}/><br></br>
            <input type="submit" name="upload" value="upload"/><br></br>
        </form>
    </div>
    )

}

export default Admin;
