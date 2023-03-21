import React from 'react'
import Header from '../Header/index'


function Layout(props) {
  return (
   <>
    <Header/>
    
    {props.children}
   </>
  )
}

export default Layout