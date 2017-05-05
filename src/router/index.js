import App from '../containers/App'
import Home from '../pages/Home'
import HotelList from '../pages/HotelList'
import HotelDetail from '../pages/HotelDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ErrorPage from '../pages/ErrorPage'

export default [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Home
    },
    childRoutes: [
      {
        path: 'hotellist',
        component: HotelList
      },
      {
        path: 'hoteldetail',
        component: HotelDetail
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '*',
    component: ErrorPage
  }
]
