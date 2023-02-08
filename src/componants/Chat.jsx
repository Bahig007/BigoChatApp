import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContex';
import { auth } from "../firebase";
import {Link, useHistory} from 'react-router-dom';
import { ChatEngine} from 'react-chat-engine';
function Chat() {

    const {user} = UserAuth()


  return (
    <div>
        Hello {user?.displayName}
        <Link to='/'>Home</Link>
    </div>
  )
}

export default Chat;
