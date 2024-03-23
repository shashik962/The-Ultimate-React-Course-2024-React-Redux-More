import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './PageNav.module.css'

export default function PageNav() {
  return (
    <nav className={styles.nav} >
         <ul>
            <li>
               {/* <Link to='/'>Home</Link> */}
               <NavLink to='/'>Home</NavLink>
            </li>
            <li>
               {/* <Link to='pricing'>Pricing</Link> */}
               <NavLink to='/pricing'>Pricing</NavLink>
            </li>
            <li>
               {/* <Link to='product'>Product</Link> */}
               <NavLink to='/product'>Product</NavLink>
            </li>
         </ul>
    </nav>
  )
}
