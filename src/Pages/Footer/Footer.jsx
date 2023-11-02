import React from 'react'

import './footer.scss'

export default function Footer() {

  const currentYear = new Date().getFullYear();


  return (

    <div className='FooterContainer'>
      
      <p> © AJK - {currentYear} </p>

    </div>

  )
}
