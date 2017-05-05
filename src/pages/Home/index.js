import React from 'react'
import Nav from '../../components/Nav'
import HomePicList from '../../components/HomePicList'

export default class Home extends React.Component {
    render () {
        return (
          <div>
            <Nav />
            <HomePicList />
          </div>
        )
    }
}
