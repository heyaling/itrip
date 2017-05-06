import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to="/hotellist">HotelList</Link>
          </li>
          <li>
            <Link to="/hoteldetail">HotelDetail</Link>
          </li>
        </ul>
      </div>
    )
  }
}
