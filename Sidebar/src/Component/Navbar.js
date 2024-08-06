import React from "react";
import picture from './../Images/United_States_(USA)_Flag_Emoji.png'


function Navbar(){
    return(
        <div className='slidebar-menu-right'>
                            
            <ul className='d-flex text-white'>
                <li>
                    <h4>
                        <a>IRR</a>
                    </h4>
                </li>
                <li className='pics'>
                    <img className='pics' src={picture} width={30} />
                </li>
                <li>
                    <h4>
                        List your property
                    </h4>
                </li>
                <li>
                    <button className='btn btn-primary text-white '>Register</button>
                </li>
                <li>
                    <button className='btn btn-primary  '>
                        Sign in
                    </button>
                </li>
            </ul>
        </div>
    )
}


export default Navbar