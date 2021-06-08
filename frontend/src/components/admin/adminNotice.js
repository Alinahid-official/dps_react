import React, { Component,useState,useEffect} from 'react';
import {Route, Switch,Link } from 'react-router-dom';
import axios from 'axios';
import history from '../../history';

const NoticeList=props=>{
    if(props.notices==null){
        return null;
    }else{
        return props.notices.map(notice=>{
            return(
                <li key={notice._id}><a href={notice.url}>{notice.title}</a></li>)
        })}
}

const AddNotice=()=>{
    const [notice, setNotice] = useState('');
    const [title,setTitle] =useState('');
    
    const submit=(event)=>{
        event.preventDefault();
        const user = {notice:notice,title:title}
        let formData = new FormData();
        formData.append("notice", notice);
        formData.append("title",title)
        axios.post('http://localhost:4000/uploadNotice',formData)
        .then(res =>{
            if(res.status==200){
                history.push('/admin/adminNotice')
            }
        
        })
        .catch(error=>{console.log(error)})
    }
    const fileHandleChange=(e)=>{
        e.preventDefault()
        setNotice(e.target.files[0])
    }
    return(
        <div>
            <form onSubmit={submit}>
            <label>Title</label>
            <input type="text" value={title} onChange={e=>{setTitle(e.target.value)}}/>
            <input type="file" onChange={fileHandleChange}/>
            <button type="submit" >add</button>
            </form>
            
        </div>)
}
 
class AdminNotice extends Component {
     
    constructor() {
        super();
        this.state = {
          
          notices:null
        };
      }
      componentDidMount() {
          axios.get('http://localhost:4000/noticelist')
          .then(res =>{
              if(res.status==200){
                  
                  this.setState({notices:res.data.notices})
                 
              }
          })
      }
      
    
    render(){
        return(
            <div>
                <ul>
                <NoticeList notices={this.state.notices}/>
                </ul>
               
               <AddNotice/>
            </div>)
    }
}
export default AdminNotice;