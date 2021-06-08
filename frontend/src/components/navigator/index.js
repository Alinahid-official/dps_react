import React from 'react'
import Navigation from '../navigation/index';
import Footer from '../home/footer';
import {connect} from 'react-redux';
import gallery from './gallery'
import { Route ,Switch} from 'react-router';
import syllabus from './syllabus'
import Gallery from './gallery';
class Navigator extends React.Component{
    
    render(){
        const {url,path}=this.props.match;
        console.log(url,path)
        return(
            <div>
                <Navigation/>  
                <Switch>
                <Route path={`${path}/syllabus`} component={syllabus}></Route>
                 
                
            </Switch>
               
             
            <Footer/>
            </div>
            
            )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
});
export default connect(mapStateToProps)(Navigator);