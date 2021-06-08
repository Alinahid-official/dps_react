import React from 'react';
import UpperHeader from './upperHeader';
import LowerHeader from './lowerHeader';
import './navigation.css'
 
class Navigation extends React.Component{
    render(){
 
        return(
            <div>
            <UpperHeader/>
            <LowerHeader/>
           
            </div>)
    }
}
export default Navigation;