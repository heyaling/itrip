import React from 'react'
import { Upload, Icon, Modal } from 'antd';

import './style.css'

//上传图片组件情况
export default class PicUpload extends React.Component {

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
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
  imgRemove = (e) => {
    console.debug(e);
  }
/*  handleChange = ({ fileList }) => this.setState({ fileList }, () => {
     this.forceUpdate();
    let imgUrl = "";
    if (fileList[0].status == "done") {
      imgUrl = fileList[0].response.data[0];
      console.log(fileList[0]);
      this.props.picValue(imgUrl);

    }
  }
  )*/

  // 添加图片
  handleChange = ({ fileList }) => {
    this.setState({ fileList });
    console.log(fileList);
    let imgUrl = [];

    if (fileList && fileList.length > 0) {
      fileList.map((value,i) => {
        if(fileList[i].status === "done"){
         imgUrl.push(value.response.data[0]);
        }
      })
    }
      this.props.picValue(imgUrl);

   
    /*if (this.state.fileList[0].status == "done") {
      imgUrl.push(this.state.fileList[0].response.data[0]);
      //console.log(fileList[0]);
      this.props.picValue(imgUrl);
    }*/
    //this.setState({fileList: []});
    
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
