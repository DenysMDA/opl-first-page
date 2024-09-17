import React from 'react'
import MicrosoftHeaderLogo from '../../assest/MicrosoftHeaderLogo.png'
import './header.scss'

const Header = () => {

  return (
    <div className='header-container'>
        <img src={MicrosoftHeaderLogo} alt='logo' width={90} height={20} className='header-logo'></img>
        <p className='header-title'>Operator Connect Portal</p>
    </div>
  )
}

export default Header