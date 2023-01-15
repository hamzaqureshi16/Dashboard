import React from 'react'
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <div className='navbar bg-dark'>
        <a href="/" className='ml-5  navbar-brand'>
        <Link to='/dashboard' className='active'>Home</Link>
        <Link to='/visualise'>Visualize</Link></a>
        
      
    </div>
  )
}
