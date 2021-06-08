import React from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
class LowerHeader extends React.Component{
    render(){
        return(
            <div class='cover' id='cover'>
                <Navbar ref={this.navbar}/>
            <div class="cover_middle_text">
                <h1>Welcome to DPS, <br></br>Pakur</h1>
            </div>
            <div class="cover_btn">
                <Link class="btn btn_trans mg-r-10" to="auth/login">Online Admission</Link>
                <Link class="btn btn_solid mg-r-10" to="/payment">Pay Your Fees</Link>
            </div>
            </div>
        )}
}
export default LowerHeader;