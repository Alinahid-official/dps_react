import React from 'react';
import './navbar.css';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {icon:null,sticky:false}
        this.navbar = React.createRef();
    }
    
   
    open(e){
        e.preventDefault();
        this.setState({icon:'open'})
        
    }
    close(e){
        e.preventDefault();
        this.setState({icon:null})
        
    }
    render(){
        return(
               <div ref={this.navbar} className={`navbar ${this.state.sticky ? 'sticky':''}`} id="myTopnav">
                <ul className={`ul ${this.state.icon ? 'responsive':''}`}>
                    <li><Link to='/'><i class="fas fa-home"></i></Link></li>
                    <li class="head_navbar_li_item" ><Link class="nav_btn">Academics</Link>
                    <ul class="drop_1">
                        <li><Link to="/navigate">Curriculum</Link></li>
                        <li><Link to="/navigate/syllabus">Syllabus</Link></li>
                        <li><Link to="/notice">Notices</Link></li>
                    </ul></li>
                    <li class="head_navbar_li_item" ><Link  class="nav_btn">Admission</Link>
                            <ul class="drop_2">
                                <li><Link to="/auth/register">ApplyOnline</Link></li>
                                <li><Link to="/fees">FeeDetails</Link></li>
                                <li><Link to="/procedure">Procedure</Link></li>
                            </ul></li>
                    <li class="head_navbar_li_item" ><Link  to="">About Us</Link>
                        <ul class="drop_3">
                            <li><Link to="">Faculties</Link></li>
                            <li><Link to="">Classrooms</Link></li></ul></li>
                    <li class="head_navbar_li_item" ><a class="nav_btn">Facilties</a>
                        <ul class="drop_4">
                            <li><Link to="">Transportation</Link></li>
                            <li><Link to="/playgrounds">Playgrounds</Link></li>
                            <li><Link to="">Library</Link></li>
                        </ul></li>
                    <li class="head_navbar_li_item" ><Link to="/gallery">Gallery</Link></li>
                    <li class="head_navbar_li_item" ><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className={`icon ${this.state.icon ? 'hide':'show'}`} onClick={e=>this.open(e)}>
                    <i class="fa fa-bars"></i>
                  </div>
                  <div className={`icon ${!this.state.icon ? 'hide':'show'}`}  onClick={e=>this.close(e)}>
                  <i class="fas fa-times"></i>
                  </div> 
            </div>
            
            
        )}
}
export default Navbar;