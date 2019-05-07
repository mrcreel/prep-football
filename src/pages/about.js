import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'

export default () => (
  <div style={{ color: 'teal' }}>
    <Link to='/'> Index </Link>
    <Link to='/teams/'>Teams </Link>
    <Header headerText='About Page!' />
    <p>Such wow. Very React.</p>
    <img src='https://source.unsplash.com/random/400x200' alt='' />
  </div>
)