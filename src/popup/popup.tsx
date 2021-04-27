import React from 'react'
import ReactDOM from 'react-dom'
import 'fontsource-roboto'
import './popup.css'
import WeatherCard from './weatherCard'

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="Dhaka" />
      <WeatherCard city="Finland" />
      <WeatherCard city="error" />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
