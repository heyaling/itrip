import React from 'react'
import { Upload, Icon, Modal } from 'antd';

import './style.css'

//上传图片组件情况
export default class PicUpload extends React.Component {

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })
  
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
                      <Upload {...props}
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        fileList={fileList}
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
