import React, {useEffect,useState}from 'react'
import Navigation from '../navigation/index';
import ImageGallery from "react-image-gallery";
import axios from 'axios'
const Images =()=>{

  
    const [images,setImages]=useState(null)
    
    
    useEffect(()=>{
      updateImages('all');
  
      },[])
    const updateImages=(data)=>{
      const value={category:data}
 
        axios.post('http://localhost:4000/galleryImages',value)
        .then(res=>{
          const imgs = []; 
              res.data.map(img=>{
                let imge={
                  original: img.url,
                  thumbnail: img.turl,
                }
                imgs.push(imge)
              })
              setImages(imgs)
              })
    }
   
    const handleChange=(e)=>{
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
        {images?<ImageGallery items={images} /> : <div>no images</div>}
      </div>
        </div>
    )

}
class Gallery extends React.Component{
   
    render(){
     
        
    
        return(
            <div>

             <Navigation/>
             <Images/>
          
            </div>
            
            )
    }
}
export default Gallery;