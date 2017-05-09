/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react' 
'use strict';


export default class HouseHotelassess extends React.Component {
	render(){
		return (
							
				<div className="i_cost_con i_comment_con" id="hotelassess">
        <div className="i_cost clearfix">
          <span className="i_icon1">
            <h4>用户点评</h4>
            <i className="icon-user" />
          </span>
          <div className="i_grade">
            <div className="i_total_grade clearfix">
              <div className="i_left">
                <b>4.9</b>
                <span>总体评分</span>
              </div>
              <div className="i_right">
                <ul className="process">
                  <li>
                    位置
                    <span className="num">4.7</span>
                    <span className="processbar">
                      <em className="bar" />
                    </span>
                  </li>
                  <li>
                    设施
                    <span className="num">4.3</span>
                    <span className="processbar">
                      <em className="bar_two" />
                    </span>
                  </li>
                  <li>
                    服务
                    <span className="num">4.6</span>
                    <span className="processbar">
                      <em className="bar_three" />
                    </span>
                  </li>
                  <li>
                    卫生
                    <span className="num">4.5</span>
                    <span className="processbar">
                      <em className="bar_four" />
                    </span>
                  </li>
                </ul>		
              </div>
              <div className="searchComment">
                <input type="text" placeholder="搜索点评关键词" /><input type="button" defaultValue="搜索" />
              </div>
            </div>
            <div className="i_grade_list">
              <ul className="score_list">
                <li className="list_cur">
                  <a href="javascript:;">
                    全部评论
                    <span>(2110)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    值得推荐
                    <span>(600)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    有待改善
                    <span>(354)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    有图片
                    <span>(456)</span>
                  </a>
                </li>
              </ul>
              <div className="all_data all_data_cur">
                <ul className="comment_list">
                  <li>
                    <div className="author ">
                      <a href="javascript:;">
                        <i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" />
                      </a>
                      <strong>5分</strong>
                      <p>
                        思****209
                      </p>
                      <span>
                        商务出差
                      </span>
                    </div>
                    <p className="comment_info">
                      <span>商务出差   2016.11.25 入住 </span>
                      <span>高尔夫豪华海景房</span>
                    </p>
                    <p className="comment_detail">
                      客观点评下 喜来登是公务接待的不二之选，房型正气 不像其他酒店歪瓜裂枣的。挑高也舒服。朋友住美高梅，明显压抑。园林绿化相当有味道。 游泳池不多，沙滩的那个泳池如图，水深1.7-2.0米 而两米区域又是妹子拍照的角度，但你让她们160+小身板的旱鸭子游过去？这个泳池很漂亮 建议多建设个。 整体推荐入住，不会后悔。
                    </p>
                    <div className="comment_pic_list">
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_03.jpg" height={100} width={100} alt="" /></a>
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_05.jpg" height={100} width={100} alt="" /></a>
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_07.jpg" height={100} width={100} alt="" /></a>
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_09.jpg" height={100} width={100} alt="" /></a>
                    </div>
                    <p className="detail_comment_tips">
                      <a href="#">2016-09-05 18:47</a>
                      <a href="#">来自：i 旅行</a>
                    </p>
                  </li>
                </ul>
                <ul className="comment_list">
                  <li>
                    <div className="author ">
                      <a href="javascript:;">
                        <i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" />
                      </a>
                      <strong>5分</strong>
                      <p>
                        思****209
                      </p>
                      <span>
                        家庭亲子
                      </span>
                    </div>
                    <p className="comment_info">
                      <span>家庭亲子   2016.11.25 入住 </span>
                      <span>高尔夫豪华海景房</span>
                    </p>
                    <p className="comment_detail">
                      宝宝2岁生日携全家旅游度假，接机存在误导，提示的预定房间成人人数，结果没有算上宝宝，其实应该算实际人数即可，酒店还是很好的，房间挺大，也很干净，服务员几乎每天都给开夜床，第一天晚上加的婴儿床感觉太深让服务员加了两个床垫进去，小伙子服务很麻利，还让我签了安全免责，可以理解。早餐品种繁多，可以满足老人和孩子的各种需求，因为宝宝在餐厅不好好吃饭，所以特别要求了早餐蒸好一份蛋羹送到房间，服务员还很贴心的给了美极鲜。总体评价酒店棒棒哒！全家人都很满意！
                    </p>
                    <p className="detail_comment_tips">
                      <a href="#">2016-09-05 18:47</a>
                      <a href="#">来自：i 旅行</a>
                    </p>
                  </li>
                </ul>
                <ul className="comment_list">
                  <li>
                    <div className="author ">
                      <a href="javascript:;">
                        <i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" />
                      </a>
                      <strong>5分</strong>
                      <p>
                        思****209
                      </p>
                      <span>
                        情侣出游
                      </span>
                    </div>
                    <p className="comment_info">
                      <span>情侣出游   2016.11.25 入住 </span>
                      <span>高尔夫豪华海景房</span>
                    </p>
                    <p className="comment_detail">
                      作为一个在酒店大数据公司上班的员工，深知每一个点评对酒店的重要性，我也本着客观公正的态度来对这一晚三亚喜来登做出评价。也希望酒店领导可以重视下面出现的问题，可以得到真正的走心的改善。 拼车是大巴车，到了机场找到临时停车场摆渡车，做到临时停车场即可看到接机人员，很方便，也没等多久，他们就安排发车了，虽然车有一点点破，但是好评！ 到了喜来登，两位服务员小伙子迎上来拿行李，本来我们箱子也不重，他们争相帮我们开大巴车的储物门，绕了一圈才找到箱子，帮我们拖进去了，好评！
                    </p>
                    <p className="detail_comment_tips">
                      <a href="#">2016-09-05 18:47</a>
                      <a href="#">来自：i 旅行</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="all_data">
                <ul className="comment_list">
                  <li>
                    <div className="author ">
                      <a href="javascript:;">
                        <i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" />
                      </a>
                      <strong>5分</strong>
                      <p>
                        思****209
                      </p>
                      <span>
                        商务出差
                      </span>
                    </div>
                    <p className="comment_info">
                      <span>商务出差   2016.11.25 入住 </span>
                      <span>高尔夫豪华海景房</span>
                    </p>
                    <p className="comment_detail">
                      客观点评下 喜来登是公务接待的不二之选，房型正气 不像其他酒店歪瓜裂枣的。挑高也舒服。朋友住美高梅，明显压抑。园林绿化相当有味道。 游泳池不多，沙滩的那个泳池如图，水深1.7-2.0米 而两米区域又是妹子拍照的角度，但你让她们160+小身板的旱鸭子游过去？这个泳池很漂亮 建议多建设个。 整体推荐入住，不会后悔。
                    </p>
                    <div className="comment_pic_list">
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_03.jpg" height={100} width={100} alt="" /></a>
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_05.jpg" height={100} width={100} alt="" /></a>
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_07.jpg" height={100} width={100} alt="" /></a>
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_09.jpg" height={100} width={100} alt="" /></a>
                    </div>
                    <p className="detail_comment_tips">
                      <a href="#">2016-09-05 18:47</a>
                      <a href="#">来自：i 旅行</a>
                    </p>
                  </li>
                </ul>
                <ul className="comment_list">
                  <li>
                    <div className="author ">
                      <a href="javascript:;">
                        <i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" />
                      </a>
                      <strong>5分</strong>
                      <p>
                        思****209
                      </p>
                      <span>
                        情侣出游
                      </span>
                    </div>
                    <p className="comment_info">
                      <span>情侣出游   2016.11.25 入住 </span>
                      <span>高尔夫豪华海景房</span>
                    </p>
                    <p className="comment_detail">
                      作为一个在酒店大数据公司上班的员工，深知每一个点评对酒店的重要性，我也本着客观公正的态度来对这一晚三亚喜来登做出评价。也希望酒店领导可以重视下面出现的问题，可以得到真正的走心的改善。 拼车是大巴车，到了机场找到临时停车场摆渡车，做到临时停车场即可看到接机人员，很方便，也没等多久，他们就安排发车了，虽然车有一点点破，但是好评！ 到了喜来登，两位服务员小伙子迎上来拿行李，本来我们箱子也不重，他们争相帮我们开大巴车的储物门，绕了一圈才找到箱子，帮我们拖进去了，好评！
                    </p>
                    <p className="detail_comment_tips">
                      <a href="#">2016-09-05 18:47</a>
                      <a href="#">来自：i 旅行</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="all_data">
                <ul className="comment_list">
                  <li>
                    <div className="author ">
                      <a href="javascript:;">
                        <i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" />
                      </a>
                      <strong>5分</strong>
                      <p>
                        思****209
                      </p>
                      <span>
                        家庭亲子
                      </span>
                    </div>
                    <p className="comment_info">
                      <span>家庭亲子   2016.11.25 入住 </span>
                      <span>高尔夫豪华海景房</span>
                    </p>
                    <p className="comment_detail">
                      宝宝2岁生日携全家旅游度假，接机存在误导，提示的预定房间成人人数，结果没有算上宝宝，其实应该算实际人数即可，酒店还是很好的，房间挺大，也很干净，服务员几乎每天都给开夜床，第一天晚上加的婴儿床感觉太深让服务员加了两个床垫进去，小伙子服务很麻利，还让我签了安全免责，可以理解。早餐品种繁多，可以满足老人和孩子的各种需求，因为宝宝在餐厅不好好吃饭，所以特别要求了早餐蒸好一份蛋羹送到房间，服务员还很贴心的给了美极鲜。总体评价酒店棒棒哒！全家人都很满意！
                    </p>
                    <p className="detail_comment_tips">
                      <a href="#">2016-09-05 18:47</a>
                      <a href="#">来自：i 旅行</a>
                    </p>
                  </li>
                </ul>
                <ul className="comment_list">
                  <li>
                    <div className="author ">
                      <a href="javascript:;">
                        <i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" />
                      </a>
                      <strong>5分</strong>
                      <p>
                        思****209
                      </p>
                      <span>
                        情侣出游
                      </span>
                    </div>
                    <p className="comment_info">
                      <span>情侣出游   2016.11.25 入住 </span>
                      <span>高尔夫豪华海景房</span>
                    </p>
                    <p className="comment_detail">
                      作为一个在酒店大数据公司上班的员工，深知每一个点评对酒店的重要性，我也本着客观公正的态度来对这一晚三亚喜来登做出评价。也希望酒店领导可以重视下面出现的问题，可以得到真正的走心的改善。 拼车是大巴车，到了机场找到临时停车场摆渡车，做到临时停车场即可看到接机人员，很方便，也没等多久，他们就安排发车了，虽然车有一点点破，但是好评！ 到了喜来登，两位服务员小伙子迎上来拿行李，本来我们箱子也不重，他们争相帮我们开大巴车的储物门，绕了一圈才找到箱子，帮我们拖进去了，好评！
                    </p>
                    <p className="detail_comment_tips">
                      <a href="#">2016-09-05 18:47</a>
                      <a href="#">来自：i 旅行</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="all_data">
                <ul className="comment_list">
                  <li>
                    <div className="author ">
                      <a href="javascript:;">
                        <i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" />
                      </a>
                      <strong>5分</strong>
                      <p>
                        思****209
                      </p>
                      <span>
                        商务出差
                      </span>
                    </div>
                    <p className="comment_info">
                      <span>商务出差   2016.11.25 入住 </span>
                      <span>高尔夫豪华海景房</span>
                    </p>
                    <p className="comment_detail">
                      客观点评下 喜来登是公务接待的不二之选，房型正气 不像其他酒店歪瓜裂枣的。挑高也舒服。朋友住美高梅，明显压抑。园林绿化相当有味道。 游泳池不多，沙滩的那个泳池如图，水深1.7-2.0米 而两米区域又是妹子拍照的角度，但你让她们160+小身板的旱鸭子游过去？这个泳池很漂亮 建议多建设个。 整体推荐入住，不会后悔。
                    </p>
                    <div className="comment_pic_list">
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_03.jpg" height={100} width={100} alt="" /></a>
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_05.jpg" height={100} width={100} alt="" /></a>
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_07.jpg" height={100} width={100} alt="" /></a>
                      <a href="#"><img src="images/icon/pic_list100100_xxx1212_09.jpg" height={100} width={100} alt="" /></a>
                    </div>
                    <p className="detail_comment_tips">
                      <a href="#">2016-09-05 18:47</a>
                      <a href="#">来自：i 旅行</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


			)

	}
}
