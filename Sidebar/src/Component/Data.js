import { TiThMenu} from "react-icons/ti";
import {FaHome,FaUserFriends,FaFolderOpen,FaWpforms} from 'react-icons/fa'
import { FiMessageSquare } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";



export const Menu = {
    title : "Menu" ,
    icon : <TiThMenu /> 
}

export const Header = {
    image : './../Images/R.png'
}

export const links = [
    {
         id: 1,
         url: '/',
         text: 'Home',
         icon: <FaHome />
    },
    {
         id: 2,
         url: '/tean',
         text: 'What we do',
         icon: <FaUserFriends />
    },
    {
         id: 3,
         url: '/projects',
         text: 'Projects',
         icon: <FaFolderOpen />
    },
    {
         id: 4,
         url: '/docs',
         text: 'Portfolio',
         icon: <FaWpforms />
    },
    {
        id: 5,
        url: '/docs',
        text: 'Contact Us',
        icon: <FiMessageSquare />
   },
   {
         id: 6,
         url: '/docs',
         text: 'About Us',
         icon: <IoPersonOutline />
    },
  
]

