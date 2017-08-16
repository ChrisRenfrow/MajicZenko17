import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './navbar'
import Window from './window'

Router.location = '/';

const root = document.querySelector('#root')
const app = document.querySelector('#app')

render(<NavBar />, root)
render(<Window />, app)