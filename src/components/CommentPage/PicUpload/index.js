import React from 'react'
import { Upload, Icon, Modal } from 'antd';
import { fetchBiz } from 'components/fetchUtils'
import './style.css'

//上传图片组件情况
export default class PicUpload extends React.Component {

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
    imgName: ""
  };
  // {
  //     uid: -1,
  //     name: 'xxx.png',
  //     status: 'done',
  //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  // 添加图片
  handleChange = ({ fileList }) => {
    this.setState({ fileList });
    let imgUrl = [];
    if (fileList && fileList.length > 0) {
      for (var i = 0; i < fileList.length; i++) {
        if (fileList[i].status === "done") {
          imgUrl.push(fileList[i].response.data[0]);
        }
      }
      this.props.picValue(imgUrl[fileList.length - 1]);
    }

  }
  // 移除图片
  imgRemove = (e) => {
    console.log(e);
    let removeurl = e.response.data[0];
    var arrremovepic = new Array();
    arrremovepic = removeurl.split('/');
    // 拿到要删除的图片的URL的删除码
    // console.log(arrremovepic[arrremovepic.length - 1])
    fetchBiz({
      url: "/comment/delpic?" + "imgName=" + arrremovepic[arrremovepic.length - 1],
      type: "POST",
      headers: { 'token': 'token:PC-212342343242343242334324bc36809d8-8-20170525093442-4f6496' },
      callback: e => {
        //得到后台的请求数据
        console.log("删除图片==" + JSON.stringify(e.data));
      }
    })

    this.props.picRemove(e.response.data[0]);


  }




  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="camera" />
        <div className="ant-upload-text">上传酒店图片</div>
      </div>
    );
    const props = {
      multiple: true,
    };
    return (
      <div className="picupload">
        <div className="clearfix">
          <Upload
            action="biz/api/comment/upload"
            listType="picture-card"
            fileList={fileList}
            onRemove={this.imgRemove.bind(this)}
            headers={
              {
                'token': 'token:PC-212342343242343242334324bc36809d8-8-20170525093442-4f6496'
              }
            }
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 4 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>

        <i className="commentgift"><Icon type="gift" />上传图片 <a href="javascript:;">可抽奖</a>，赢取“香格里拉酒店免房券”！</i>

        <p className="picuploadtip">建议上传真实拍摄的酒店图片（设施、周边环境、外观等细节），最多4张。每张大小不超过2M，支持jpg,gif,png。</p>

      </div>

    )
  }
}
