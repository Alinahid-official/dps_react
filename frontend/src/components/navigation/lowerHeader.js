import React from 'react'
import Navbar from '../home/navbar'
class LowerHeader extends React.Component{
    render(){
        return(
            <div>
            <div class="small_bg">
            <Navbar/>
            <div class="small_bg_image">
                <img src="/img/logom.png" alt=""/>
            </div>
           
            <div class="small_bg_middle">
               
                Welcome to DPS, Pakur
            </div>
        </div>
            </div>)
    }
}
export default LowerHeader;