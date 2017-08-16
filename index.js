import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './navbar.js'
import App from './window.js'


Router.location = '/';

const root = document.querySelector('#root')
const app = document.querySelector('#app')

// render(<NavBar>
//   <div style={styles.list}> Heyo </div>
//   </NavBar>, root)
render(<App />, app)
