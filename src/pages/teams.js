import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'

export default () => (
  <div style={{ color: `green` }}>
    <Link to='/'> Index </Link>
    <Link to='/about/'> About </Link>
    <Header headerText='Teams' />
    <p>Teams go here!</p>
  </div>
)