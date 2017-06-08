import Cookie from 'js-cookie'
import moment from 'moment'
import { Modal } from 'antd'
import { chTokenUrl } from 'constants/url'
import { postRequest } from './fetch'

let timeout = null

function requestError(err) {
  if (err.msg || err.message) {
    Modal.error({
      title: 'Token过期提示：',
      content: err.msg || err.message
    })
    return
  }
  console.log(err)
}

export function changeToken() {
    const token = Cookie.get('token')
    const user = Cookie.get('user')
    const expTime = Cookie.get('expTime')
    let milliseconds = moment(expTime - 0).diff(moment(Date.now()))
    const ms = 25 * 60 * 1000

    milliseconds = milliseconds - ms;
    clearTimeout(timeout)

    if (token && user && milliseconds > 0) {
        console.log(`${milliseconds} 毫秒后自动转换Token.`)
        timeout = setTimeout(() => {
            postRequest(chTokenUrl).then(data => {
                const days = moment(data.data.expTime - 0).diff(moment(data.data.genTime - 0), 'days', true)
                Cookie.set('token', data.data.token, {expires: days})
                Cookie.set('user', user, {expires: days})
                Cookie.set('expTime', data.data.expTime, {expires: days})
            }).catch(requestError)
        }, milliseconds)
    }
}
