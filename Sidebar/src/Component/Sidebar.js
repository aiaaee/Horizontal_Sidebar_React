import React from "react";
import { Menu , links } from './Data'
import picture2 from './../Images/R.png'
import {TiArrowLeftThick} from 'react-icons/ti'
import { useGlobalContext } from "../Contexts/Context";

function Sidebar(){
    const {openSidebar , closeSidebar , isOpenSidebar} = useGlobalContext()



    return(
        <div className='slideabr-menu-left'>
            <button className='ps-3 pe-3 fs-4 btn btn-primary text-white' onClick={openSidebar}>
                <span>{Menu.icon}</span>
                {Menu.title}
            </button>
            <div className={`Horizontal-Menu  bg-dark text-light ${isOpenSidebar ? 'Horizontal-Menu-show'  : ''}`}>
                <div className="d-flex button-icon-div">
                    <button className="btn btn-light fs-4  text-dark m-2" onClick={closeSidebar}>
                        <TiArrowLeftThick/>
                    </button>
                </div>
                <div className="mt-3">
                    <h3 className="text-center mt-5 ">
                        <img src={picture2} width={250} className="mt-5 pb-3" />  
                    </h3>
                </div>
                <ul className="mt-5">
                    {
                        links.map((item , index) => <li style={{paddingBottom:'25px'}} id={index}>
                            <a id={item.id} className="text-light fs-3 pb-2 " href={item.url}> <span>{item.icon}</span> {item.text}</a>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar