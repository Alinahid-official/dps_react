import React, { Component,useEffect,useState} from 'react';
import {Route, Switch,Link } from 'react-router-dom';
import axios from'axios';
import history from '../../history'
import './admin.css';
 

const UploadImage = props=>{
    const [image, setImage] = useState('');
    const [category,setCategory] =useState('');
    const categories=['Sports','awards']
    const fileHandleChange=(e)=>{
        e.preventDefault()
        setImage(e.target.files[0])
    }
  
    const submit=( )=>{
         
       
        let formData = new FormData();
        formData.append("image", image);
        formData.append("category",category)
        axios.post('http://localhost:4000/uploadGalleryImage',formData)
        .then(res =>{
            if(res.status==200){
                history.push('/admin/adminGallery')
            }
        
        })
        .catch(error=>{console.log(error)})
    }
    
    return(
      <div>
          <form onSubmit={submit}>
          <select onChange={e=>setCategory(e.target.value)}>
        <option value="">select one...</option>
        {categories.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <input type="file" onChange={fileHandleChange}/>
      <button type="submit">submit</button>
      
          </form>
      
     
    </div>
    )
}
 
const Images=(props)=>{
    
    const handleDelete=(id,name)=>{
        const values ={id:id,name:name}
        axios.post(`http://localhost:4000/deleteImage/`,values)
        refresh()
    }
    
    if(props.images==null){
        return <div>No Images</div>;
    }else{
        return props.images.map(image=>{
            return(
                <div key={image._id} class='thumbnail'>
                    <img src={image.url}/>
                    <button onClick={()=>{handleDelete(image._id,image.title)}} >delelte</button>
                    </div>
               )
        })}
}
const refresh=()=>{
    window.location.reload(false)
}
const ImageList = ()=>{
    
    const [images,setImages]=useState(null)
   
    useEffect(()=>{
        updateImages('all')
    },[])

   const updateImages=(data)=>{
    const value={category:data}
    // let isMounted =true
        axios.post('http://localhost:4000/galleryImages',value)
        .then(res=>{setImages(res.data)})
        // return () => { isMounted = false };
   }
   const handleChange= e=>{
    e.preventDefault();
       
    updateImages(e.target.value)
   }
    const categories=['all','Sports','awards']
    return(
        <div>
            <select onChange={handleChange}>
        <option value="">select one...</option>
        {categories.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <div>
          <Images images={images}/>
      </div>
        </div>
    )
}
class AdminGallery extends Component {
    
    render(){
        return(
            <div>
                <UploadImage />
                <ImageList/>
            </div>)
    }
}
export default AdminGallery;