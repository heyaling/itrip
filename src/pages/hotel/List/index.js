import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Home from '../../Home'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}
