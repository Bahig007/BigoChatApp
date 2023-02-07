import React from 'react'
import { Link } from "react-router-dom"
import './Nav.css';
import { useState , useEffect } from 'react';
import { AiOutlineAlignRight ,AiFillHome ,AiFillPropertySafety,AiFillInfoCircle} from "react-icons/ai";
import { BiLogIn ,BiHomeAlt} from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { ChakraProvider} from '@chakra-ui/react'
import { UserAuth } from '../context/AuthContex';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'

export default function Nav() {

  const {user,logOut} = UserAuth()

  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const [logged, setlogged] = useState(true);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);



  return (
        <div className='container'>
          <div className='logo'>
            <h4>Bigo</h4>
          </div>
          <div className='links'>
            <ul>
              {user?.displayName? <p>log out </p> : <li><Link to='/Login'>Log In</Link></li>}
              
              <li><Link to='/'>Home</Link></li>
              <li>Report Issues</li>
            </ul>
          </div>
          {activeMenu && (
            <ChakraProvider>
            <Menu>
            <MenuButton  
              as={IconButton}
              aria-label='Options'
              icon={<AiOutlineAlignRight />}
              variant='outline'
            >
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem icon={<BiHomeAlt/>}><Link to='/'>Home</Link></MenuItem>
              <MenuItem icon={<BiLogIn/>}><Link to='/Login'>Log In</Link></MenuItem>
              {logged && ( 
              <MenuItem icon={<IoMdInformationCircleOutline/>}>Mark as Draft</MenuItem>
              )}
             
            </MenuList>
          </Menu>
          </ChakraProvider>
          )}
        </div>
  )
}
