import React from 'react'
import { Router } from '@reach/router'
import Header from './Header'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Article from './Article'

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Home default path='/' />
        <Register path='/register' />
        <Login path='login' />
        <Article path='article/:slug' />
      </Router>
    </>
  )
}

export default App
