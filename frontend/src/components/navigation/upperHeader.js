import React from 'react'

class UpperHeader extends React.Component{
    render(){
        return(
            <div class="upper">
            <div class="row">
                <div class="col span-1-of-3 align-left">
                    <a class='simple-link' href="mailto:dpspakur@gmail.com"><i class="fas fa-envelope"></i><i class="txt">dpspakur@gmail.com</i> </a>
                    <a class='simple-link' href="http://"><i class="far fa-calendar-alt"></i><i class="txt">Academic Calender</i> </a>
                </div>
                <div class="col span-1-of-3 align-center">
                    <a class='simple-link' href="http://">CBSE Affiliation No : 3430354</a>
                     
                </div>
                <div class="col span-1-of-3 align-right">
                    <a class='simple-link' href="https://goo.gl/maps/tLsnnrfuwP8YfApC8"><i class="fas fa-map-marker-alt"></i><i class="txt">Police line, Pakur</i> </a>
                    <a class='simple-link' href="http://"><i class="fas fa-phone"></i><i class="txt">8051256958</i></a>
                </div>
            </div>
        </div>
        )
             
    }
}
export default UpperHeader;