import React, {useEffect,useState} from 'react';
import axios from 'axios'
const NoticeList=()=>{
    const [notices,setNotices]=useState(null)
    useEffect(()=>{
        axios.get(
            axios.get('http://localhost:4000/noticelist')
            .then(res =>{
              
                if(res.status==200){
                    
                    setNotices(res.data)
                   
                }
            })
        )
    },[])
    if(notices){
   
        const urls=[]
        const noticelist=notices.notices
       
    if(noticelist.length<5){
        for(let i=(noticelist.length-1); i>=0;i--){
            urls.push(noticelist[i])
       }
     
    }
   
    else{
        for(let i=5; i>=0;i--){
            urls.push(noticelist[i])
       } 
        
    }
 
     const list = urls.map(url=>{
         return <li><i class="fas fa-arrow-alt-circle-right"></i><a href={url.url} download>{url.title}</a></li>
     })
     return <div>{list}</div>
    }
    else{
        return null;
    }
    
}
class Notice extends React.Component{
   
    render(){
       
        return(
            <div class="notice">
            <div class="heading mg-tb-50 align-center ">
                <h1> <span class='color-y'>Notice</span> Board</h1>
                <p><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i><i class="fas fa-minus"></i></p>
            </div>
            <div class="notice_content">
                <div class="notice_box">
                    <ul>
                        
                        
                       
                         <NoticeList />    
                                
                              
                    </ul>
                    <a class="btn btn_trans cover_btn_one" href="/notice"> See All</a>
                </div>
            </div>
        </div>
        )}
}
export default Notice;