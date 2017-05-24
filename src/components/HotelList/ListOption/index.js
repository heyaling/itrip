import React from 'react'
import { Radio, Checkbox, Row, Col } from 'antd';
const RadioGroup = Radio.Group;
import { fetchSearch } from 'components/fetchUtils'
import SearchHotelItem from 'components/HotelList/SearchHotelItem'
import './style.css'


const options = [
  { label: '¥150以下', value: '150' },
  { label: '¥150-300', value: '300' },
  { label: '¥301-450', value: '450' },
  { label: '¥451以上', value: '451' }
];
const optionsWithDisabled = [
  { label: '一星级/经济', value: '1' },
  { label: '二星级/舒适', value: '2' },
  { label: '三星级/舒适', value: '3' },
  { label: '四星级/高档', value: '4' },
  { label: '五星级/高档', value: '5' },
];
//列表页导航下方 搜索选项组件
export default class ListOption extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      handleSearchChild: (datas, values) => {
        // this.setState({ takeData: datas });
        this.props.dataChild(datas);
        this.setState({
          param: values
        })
        //console.warn("takeData" + JSON.stringify(datas.rows));
        //console.log("valuesOption = " + JSON.stringify(values));
        //根据后台数据生成位置选项
        this.optionnode(datas);
      }
    }
    //this.clickDesc=this.clickDesc.bind(this)
  }

  state = {
    optionnode: {},
    valOption: [],
    value1: '150',
    value2: '二星级/舒适',
  }

  //改变位置事件
  onChange1 = (checkedValues) => {
    this.state.param["tradeAreaIds"] = checkedValues.join();
    //this.props.dataChild(this.state.param);
    console.log('checked = ', this.state.param);


    //后台接口请求数据
    fetchSearch({
      url: "/hotellist/searchItripHotelPage",
      type: "POST",
      param: this.state.param,
      callback: e => {
        //得到后台的请求数据
        console.log("onChange1=" + JSON.stringify(e.data));
        // 将请求数据传递给父组件
        //this.props.receivedata(e.data, values)
      }
    })
  }
  //改变价格事件
  onChange2 = (e) => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  }
  //改变星级事件
  onChange3 = (e) => {
    console.log('radio2 checked', e.target.value);
    this.setState({
      value2: e.target.value,
    });
  }
  //改变特色事件
  onChange4 = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }
  optionnode = (data) => {
    let val = {};
    if (data && data.rows.length > 0) {
      val = data.rows.map((value, index) => {
        this.setState({
          valOption: value.tradingAreaNames
        })
        //console.log(this.state.valOption)
        return (
          <Col span={3}><Checkbox value={this.state.valOption}>{value.tradingAreaNames}</Checkbox></Col>
          //<Col span={3}><Checkbox value={index}>{value.tradingAreaNames}</Checkbox></Col>
        )
      })
    }
    this.setState(
      {
        optionnode: val
      })
  }


  /*
  clickDesc=(e)=>{
   
  
  }*/
  render() {

    return (
      <div className="travel tavern-list">
        <div className="tavern-list-head">
          <div className="localtion-item">您所在的位置：<a>酒店预订&gt;</a>北京酒店</div>
        </div>
        <div className="travel-body list-body">
          <div id="myTabContent" className="tavern-list-param">
            <SearchHotelItem receivedata={this.state.handleSearchChild} />
            <div className="tavern-search-params">
              <div className="search-one-param">
                <span className="param-label">位置：</span>
                <div className="checkbox-list">
                  {/*后台动态获取数据来生成选项*/}
                  <Checkbox.Group onChange={this.onChange1}>
                    <Row>
                      {this.state.optionnode}
                    </Row>
                  </Checkbox.Group>

                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">价格：</span>
                <div className="checkbox-list">
                  <RadioGroup options={options} onChange={this.onChange2} value={this.state.value1} />
                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">星级：</span>
                <div className="checkbox-list">
                  <RadioGroup options={optionsWithDisabled} onChange={this.onChange3} value={this.state.value2} />
                </div>
              </div>
              <div className="search-one-param">
                <span className="param-label">特色：</span>
                <div className="checkbox-list">
                  <Checkbox.Group onChange={this.onChange4}>
                    <Row>
                      <Col span={4}><Checkbox value="休闲度假">休闲度假</Checkbox></Col>
                      <Col span={4}><Checkbox value="青年旅社">青年旅社</Checkbox></Col>
                      <Col span={4}><Checkbox value="精品酒店">精品酒店</Checkbox></Col>
                      <Col span={4}><Checkbox value="商务出行">商务出行</Checkbox></Col>
                      <Col span={4}><Checkbox value="会">会</Checkbox></Col>
                    </Row>
                  </Checkbox.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}





