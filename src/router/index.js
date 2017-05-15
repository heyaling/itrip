import App from 'containers/App'
import Home from 'pages/Home'
import HotelList from 'pages/HotelList'
import HotelDetail from 'pages/HotelDetail'
import OrderPage from 'pages/OrderPage'
import OrderDetail from 'pages/OrderDetail'
import CommentPage from 'pages/CommentPage'
import OrderFill from 'pages/OrderFill'
import OrderPay from 'pages/OrderPay'
import Login from 'pages/Login'
import Register from 'pages/Register'
import ErrorPage from 'pages/ErrorPage'

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
      },
      {
        path: 'orderpage',
        component: OrderPage
      },
      {
        path: 'orderdetail',
        component: OrderDetail
      },
      {
        path: 'orderfill',
        component: OrderFill
      },
      {
        path: 'commentpage',
        component: CommentPage
      },
      {
        path: 'orderpay',
        component: OrderPay
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
