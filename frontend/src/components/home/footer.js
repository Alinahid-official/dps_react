import React from 'react';
class Footer extends React.Component{
    render(){
        return(
        <div class="footer">
            <div class="row">
                <div class="col span-1-of-3 footer_col">
                    <img src="/img/logom.png" alt=""/>
                    <h3>DELHI PUBLIC SCHOOL</h3>
                    <p>Pakur,Jharkhand</p>
                 

                </div>
                <div class="col span-1-of-3 footer_col">
                    <h3>Quick links</h3>
                    <ul>
                        <li><a href="">Admission</a></li>
                        <li><a href="">Facullties</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Achievements</a></li>
                    </ul>

                </div>
                <div class="col span-1-of-3 footer_colu">
                    <h3>Social links</h3>
                    <a href=""><i class="fab fa-facebook"></i></a><br></br>
                    <a href=""><i class="fab fa-twitter-square"></i></a><br></br>
                    <a href=""><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="credits">
            <p>Copyright © 2020 Indian Institute of Technology Delhi. All Rights Reserved. Developed and maintained by d&d</p>
        </div>
        </div>)}
}
export default Footer;