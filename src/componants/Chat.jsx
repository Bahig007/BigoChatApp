import React, { useEffect, useState ,useRef} from 'react'
import { UserAuth } from '../context/AuthContex';
import { auth } from "../firebase";
import {Link} from 'react-router-dom';
import { ChatEngine} from 'react-chat-engine';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Chat() {
  const navigate = useNavigate(); 
const [loading,setLoading] = useState(true)
    const {user} = UserAuth()


  const getFile = async(url) => {
    const response = await fetch(url);
    const data = await response.blob();


    return new File([data, 'userPhoto.jpg',{type:'image/jpeg'}])
  }






  useEffect(() => {
      if (!user) {
        
        navigate('/')
    
        return;
    }
     axios.get('http://api.chatengine.io/users/me',{
      headers: {
        'project-id':'3ba897b6-2d46-4fc1-8c3c-d936ed51c0d9',
        'user-name' : user.email ,
        'user-secret': user.uid ,
      }
     })
     .then(() => {
        setLoading(false)
     })
     .catch (() => {
      let formData = new FormData();
      formData.append('email', user.email);
      formData.append('username', user.email);
      formData.append('secret', user.uid);


      getFile(user.photoURL)
        .then ((avatar) => {
          formData.append('avatar', avatar, avatar.name);

          axios.post('http://api.chatengine.io/users',
          formData,
          { 
            headers: {
              'private-key' : "92913d73-9456-432e-947e-9983a0c0349f"
            }
          }
          )
          .then (() => {
            setLoading(false)
          })
          .catch ( (error) => {
            console.log(error)
          })

        })
     })
  },[user])
if(!user || loading) return 'Loading...'
  return (
    <div>
        <div>{user.displayName}</div>
        <div className='core'>
              <ChatEngine
              height='calc(100vh - 66px)'
              projectID='3ba897b6-2d46-4fc1-8c3c-d936ed51c0d9'
              userName={user.email}
              userSecret={user.uid}
              
              />
        </div>
    </div>
  )
}

export default Chat;
