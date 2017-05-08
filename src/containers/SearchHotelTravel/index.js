import React from 'react'
import { Tabs } from 'antd'
import SearchHotelInland from 'components/SearchHotelInland'
import SearchHotelForeign from 'components/SearchHotelForeign'
import SearchHotelGroupon from 'components/SearchHotelGroupon'
import './style.css'

const TabPane = Tabs.TabPane

function callback(key) {
  console.log(key);
}

export default class SearchHotelTravel extends React.Component {
  
  handleSubmit = formData => {
    console.log(formData)
  }

  render() {
    return (
      <div className='SearchHotelTravel'>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="国内酒店" key="1">
            <SearchHotelInland onSubmit={this.handleSubmit} />
          </TabPane>
          <TabPane tab="国外酒店" key="2">
            <SearchHotelForeign onSubmit={this.handleSubmit} />
          </TabPane>
          <TabPane tab="酒店团购" key="3">
            <SearchHotelGroupon onSubmit={this.handleSubmit} />
            </TabPane>
        </Tabs>
      </div>
    )
  }
}


