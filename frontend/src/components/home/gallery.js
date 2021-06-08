import React from 'react';
import {Link} from 'react-router-dom';
class Gallery extends React.Component{
    render(){
        return(
            <div class="photo_gallery ">
            <div class="heading mg-tb-50 align-center">
                <h1> <span class='color-y'>Photo</span> Gallery</h1>
                <p><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i></p>
            </div>
            <div class="align-center mg-tb-50">
                <p>We promise to deliver quality in all aspects. Capture them and kep them.</p>
                <div class="imgs row">
                    <div class="col span-1-of-4 ">
                        <div class="photo">
                            <a href="/gallery"><img src="img/WhatsApp-Image-2018-01-08-at-12.49.21-PM.jpeg" alt=""/></a>    
                        </div>
                        
                    </div>
                    <div class="col span-1-of-4 ">
                        <div class="photo">
                            <a href="/gallery"><img src="img/g2.png" alt=""/></a>
                        </div>
                        
                    </div>
                    <div class="col span-1-of-4 ">
                        <div class="photo">
                            <a href="/gallery"><img src="img/g3.png" alt=""/></a>
                        </div>
                       
                    </div>
                    <div class="col span-1-of-4 ">
                        <div class="photo">
                            <a href="/gallery"><img src="img/g4.png" alt=""/></a>
                        </div>
                       
                    </div>
                </div>
                <div class="imgs row">
                    <div class="col span-1-of-4 ">
                        <div class="photo">
                            <a href="/gallery"><img src="img/g5.png" alt=""/></a>
                        </div>
                        
                    </div>
                    <div class="col span-1-of-4 ">
                        <div class="photo">
                            <a href="/gallery"><img src="img/g6.png" alt=""/></a>
                        </div>
                        
                    </div>
                    <div class="col span-1-of-4 ">
                        <div class="photo">
                            <a href="/gallery"><img src="img/g7.png" alt=""/></a>
                        </div>
                        
                    </div>
                    <div class="col span-1-of-4 ">
                        <div class="photo">
                            <a href="/gallery"><img src="img/WhatsApp-Image-2018-01-08-at-12.49.21-PM.jpeg" alt=""/></a>
                        </div>
                        
                    </div>
                </div>
                <Link class="btn btn_trans_green  " to="/gallery">Discover More</Link>
            </div>
        </div>
        )}
}
export default Gallery;