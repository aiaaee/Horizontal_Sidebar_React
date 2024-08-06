import React from 'react'

// Components 
import './style.css'
import BrandingSection from './BrandingSection'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function App(){
    return(
        <>
            <div className='header'>
                <div>
                    <div className='slidebar-menu d-flex'>
                        <Sidebar  /> 
                        <Navbar /> 
                    </div> 
                    <BrandingSection /> 
                </div>
            </div>
        </>
    )
}

export default App