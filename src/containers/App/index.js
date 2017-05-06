import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
