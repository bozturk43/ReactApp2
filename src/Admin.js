import axios from 'axios';
import React,{useRef,useState} from 'react';

const Admin=()=>{

    const[baslik,setBaslik]=useState("");
    const[icerik,setIcerik]=useState("");
    const[yazar,setYazar]=useState("");

    const handleBaslik=(e)=>{
        setBaslik(e.target.value);
    }

    const handleIcerik=(e)=>{
        setIcerik(e.target.value);
    }

    const handleYazar=(e)=>{
        setYazar(e.target.value);
    }

    const postArray={
        baslik:baslik,
        icerik:icerik,
        yayinci:yazar
    }

    const postEkle=(e)=>{
        e.preventDefault();
        console.log(postArray)
        console.log("Fonksiyon Çalıştı")
       axios.post("http://localhost/php_rest_fztwebsite/api/post/create.php",postArray)
        .then(response=>{console.log(response)})
        .catch(error=>{
            console.log(error)
        });
    }


    return(
    <div>
        <h1>Admin Sayfası</h1>
        <form onSubmit={postEkle}>
            <label>Konu Baslıgı</label>
            <input type="text" onChange={handleBaslik}></input>
            <label>İcerik</label>
            <input type="text" onChange={handleIcerik}></input>
            <label>Yazar</label>
            <input type="text" onChange={handleYazar}></input>
            <button type="submit">Ekle</button>
        </form>
    </div>
    )

}

export default Admin;
