import React from 'react';
import{Link} from 'react-router-dom'
class UpperHeader extends React.Component{
    render(){
        return(
            <div>
                 <div class="upper">
            <div class="row">
                <div class="col span-1-of-3 align-left">
                    <Link class='simple-link' href="mailto:dpspakur@gmail.com"><i class="fas fa-envelope"></i><i class="txt">dpspakur@gmail.com</i> </Link>
                    <Link class='simple-link' href="http://"><i class="far fa-calendar-alt"></i><i class="txt">Academic Calender</i> </Link>
                </div>
                <div class="col span-1-of-3 align-center">
                    <Link class='simple-link' href="http://">CBSE Affiliation No : 3430354</Link>
                     
                </div>
                <div class="col span-1-of-3 align-right">
                    <Link class='simple-link' href="https://goo.gl/maps/tLsnnrfuwP8YfApC8"><i class="fas fa-map-marker-alt"></i><i class="txt">Police line, Pakur</i> </Link>
                    <Link class='simple-link' href="http://"><i class="fas fa-phone"></i><i class="txt">8051256958</i></Link>
                </div>
            </div>
        </div>
        <div class="logo">
            <div class="row">
                <div class="col span-1-of-3 align-right">
                    <img src="img/logo.jpeg" alt="logo"/>
                </div>
                <div class="col span-2-of-3 align-left mgt-50 ">
        
                        <div class="color-y">
                        DELHI PUBLIC SCHOOL, PAKUR
                    </div>
                    <div >
                        Police line, Pakur, Jharkhand
                    </div>
                    
                </div>
            </div>
        </div>
            </div>
        )}
}
export default UpperHeader;