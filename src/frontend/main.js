import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './main.sass'

import Welcome from './sections/Welcome/Welcome'
import Suggestions from './sections/Suggestions/Suggestions'

const Main = () => {
  return (
    <div id='Main'>
      <Welcome/>
      <Suggestions/>
    </div>
  )
}

ReactDOM.render(<Main/>, document.getElementById('root'))