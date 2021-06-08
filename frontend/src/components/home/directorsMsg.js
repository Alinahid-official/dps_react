import React from 'react';
import Navbar from './navbar'
class DirectorMsg extends React.Component{
    render(){
        return(
            <div class="directors_message">
        <div class="heading align-center mg-tb-50">
            <h1> <span class='color-y'>DIRECTOR'S</span> MESSAGE</h1>
            <p><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i></p>
        </div>
        <div class="">
            <div class="row">
                <div class="col span-1-of-2 dm_pic align-center">
                    <img src="img/banner-3-modifyed.jpg" alt=""/>
                    <p>Mr Arunendra Kumar <br></br>
                        (director)</p>
                </div>
                <div class="col span-1-of-2 align-center mg-t-50">
                    <h2>MAGICAL MOMENTS OF AFFIRMATIVE TRANSFORMATION</h2>
     
                    <p>Almost all the DPS Schools whether they be in India or abroad are affiliated to the CBSE which is the largest educational board in the country. Thus D.P.S. is a trusted name in quality education. Learning at the school is viewed as an exclusive experience, which is not only about gaining knowledge, but also about shaping character and life skills...

</p>
                    <a class="btn btn_trans_green  " href="/director_message">read more</a>
                </div>

            </div>
        </div>
        </div>
        )}
}
export default DirectorMsg;