import React from 'react';
class Facilities extends React.Component{
    render(){
        return(
<div class="facilities">
            <div class="heading mg-tb-50 align-center">
                <h1> <span class='color-y'>School </span>Facilities</h1>
                <p><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i></p>
            </div>
            <div class="fac_content">
                <div class="row">
                    <div class="col span-1-of-3">
                        <a href="">
                            <img src="img/facilities_img.jpg" alt=""/>
                           <h3>Transportation</h3>
                            <p>Students can avail the school transport subject to the availability of seats...</p>
                            <h4>view details</h4>
                        </a>
                        

                    </div>
                    <div class="col span-1-of-3">
                        <a href="">
                            <img src="img/career_faci.jpg" alt=""/>
                            <h3>Career Counsiling</h3>
                            <p>The role of the school counsellor is delicate and precise. Students can come to them..</p>
                            <h4>view details</h4>
                        </a>
                        

                    </div>
                
                    <div class="col span-1-of-3">
                        <a href="/playgrounds">
                            <img src="img/facilities_img.jpg" alt=""/>
                            <h3>Play Ground</h3>
                            <p>The large spacious playground to play any type of sports....</p>
                            <h4>view details</h4>
                        </a>
                         
                       

                    </div>
                </div>
            </div>
        </div>
        )}
}
export default Facilities;