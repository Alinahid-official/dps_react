import React from 'react';
import UpperHeader from './upperHeader';
import LowerHeader from './lowerHeader';
import DirectorMsg from './directorsMsg';
import PrincipalMsg from './principalMsg';
import Notice from './notice';
import Gallery from './gallery';
import Facilities from './facilities';
import Belt from './belt';
import Footer from './footer';
import {connect} from 'react-redux';
import './home.css';


class Home extends React.Component{
 
render(){
    return(
        <div>
            <UpperHeader/>
            <LowerHeader/>
            <DirectorMsg/>
            <PrincipalMsg/>
            <Notice/>
            <Gallery/>
            <Facilities/>
            <Belt/>
            <Footer/>
        </div>)
}
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
});
export default connect(mapStateToProps,{})(Home);