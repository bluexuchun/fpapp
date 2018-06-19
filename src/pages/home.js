import React from 'react';
import './home.less';
import logo from '../resource/images/fp.png';
import quesImg from '../resource/images/pic.png';
import { ajaxTo } from '../util/util';
import { Form,Input,Button,Table,Modal,message } from 'antd';
const FormItem = Form.Item;
const {TextArea} = Input;

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible:false,
      title:'2018年菲派中国销售竞赛知识问答',
      quesList:{},
      userInfo:{},
    }
  }
  handleChange(e,name){
    const quesList = this.state.quesList;
    const value = {...quesList,[name]:e.target.value};
    this.setState({
      quesList:value
    })
  }
  handleUser(e,name){
    const userList = this.state.userInfo;
    const value = {...userList,[name]:e.target.value};
    this.setState({
      userInfo:value
    })
  }
  handleSubmit = () => {
    this.setState({
      visible:true
    })
  }
  onCreate = () =>{
    const name = this.state.userInfo.name;
    const company = this.state.userInfo.company;
    const shop = this.state.userInfo.shop;
    if(name != '' && company != '' && shop != ''){
      const answerList = this.state.quesList;
      const userInfo = this.state.userInfo;
      const data = {'answerList':answerList,'userInfo':userInfo};
      const url = 'api.php?entry=app&c=answer&a=answer';
      ajaxTo(url,data)
      .then((res) => {
        console.log(res);
        if(res.status == 1){
          message.success(res.message);
          this.setState({
            visible:false
          })
        }else{
          message.error(res.message);
        }
      })
    }else{
      message.error('请填写详细信息');
    }

  }
  onCancel = () =>{
    this.setState({
      visible:false
    })
  }

  render () {
    return (
      <div className="main">
        <div className="header">
          <img className="logo" src={logo} alt=""/>
        </div>
        <div className="title">{this.state.title}</div>
        <div className="content">
          <div className="contentFill">一、填空题</div>

          {/* 第一题 */}
          <div className="ques">
            <div className="ques-item">
              <div className="ques-item-id">(1)</div>
              <Input className="ques-item-question" addonBefore="德国菲派成立于" addonAfter="年" defaultValue="" onChange={(e) => this.handleChange(e,'ques1-before')}/>
            </div>

            <div className="ques-item ques-item-after">
              <Input className="ques-item-question" addonBefore="品牌创始人" addonAfter="(英文全名)" defaultValue="" onChange={(e) => this.handleChange(e,'ques1-after')}/>
            </div>
          </div>


          {/* 第二题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(2)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="德国菲派总部位于德国北部的"/>
            </div>
            <div className="ques-item ques-item-after">
              <Input className="ques-item-question" addonAfter="港口附近" defaultValue="" onChange={(e) => this.handleChange(e,'ques2')}/>
            </div>
          </div>


          {/* 第三题 */}
          <div className="ques">
            <div className="ques-item">
              <div className="ques-item-id">(3)</div>
              <Input className="ques-item-question" addonBefore="菲派在中国" defaultValue="" onChange={(e) => this.handleChange(e,'ques3-before')}/>
            </div>
            <div className="ques-item ques-item-after ques-spe">
              <Input className="ques-item-question ques-item-title"  addonBefore="年成立淋浴房组装工厂"/>
            </div>
            <div className="ques-item ques-item-after">
              <Input className="ques-item-question" addonBefore="在哪个城市" addonAfter="" defaultValue="" onChange={(e) => this.handleChange(e,'ques3-after')}/>
            </div>
          </div>


          {/* 第四题 */}
          <div className="ques">
            <div className="ques-item">
              <div className="ques-item-id">(4)</div>
              <Input className="ques-item-question" addonBefore="菲派在"  defaultValue="" onChange={(e) => this.handleChange(e,'ques4-before')}/>
            </div>
            <div className="ques-item ques-item-after ques-spe">
              <Input className="ques-item-question ques-item-title"  addonBefore="年创造发明了欧洲第一个淋浴房"/>
            </div>
            <div className="ques-item ques-item-after">
              <Input className="ques-item-question" addonBefore="在" addonAfter="年发明镀膜玻璃技术" defaultValue="" onChange={(e) => this.handleChange(e,'ques4-after')}/>
            </div>
          </div>


          {/* 第五题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(5)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="淋浴房测量需带哪些主要工具"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques5-1')}/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques5-2')}/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques5-3')}/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques5-4')}/>
            </div>
          </div>


          {/* 第六题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(6)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="菲派测量石基是以哪个位置为基准线"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques6')}/>
            </div>
          </div>

          {/* 第七题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(7)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="菲派由凤凰设计工作室设计的产品系列有（写出一种）"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques7')}/>
            </div>
          </div>

          {/* 第八题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(8)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="淋浴房按功按能分类（写出三种）"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques8-1')}/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques8-2')}/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques8-3')}/>
            </div>
          </div>


          {/* 第九题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(9)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="淋浴房按结构大体分哪两种"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques9-1')}/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques9-2')}/>
            </div>
          </div>


          {/* 第十题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(10)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="淋浴房按开门方式大体分哪两种"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques10-1')}/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques10-2')}/>
            </div>
          </div>


          {/* 第十一题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(11)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="淋浴房按形状分类有哪些形状（至少写出五种）"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <TextArea placeholder="淋浴房按形状分类有哪些形状,请用 ',' 分割..." autosize={{ minRows: 5, maxRows: 7 }} onChange={(e) => this.handleChange(e,'ques11')}/>
            </div>
          </div>


          {/* 第十二题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(12)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="无框淋浴房墙面安装单边可调范围"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques12')}/>
            </div>
          </div>

          {/* 第十三题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(13)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="半框淋浴房墙面安装单边可调范围"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques13')}/>
            </div>
          </div>


          {/* 第十四题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(14)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="淋浴房部件主要部件名称（至少写出五种）"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <TextArea placeholder="淋浴房部件主要部件名称, 请用 ',' 分割..." autosize={{ minRows: 5, maxRows: 7 }} onChange={(e) => this.handleChange(e,'ques14')}/>
            </div>
          </div>


          {/* 第十五题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(15)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="淋浴房玻璃命名有几种（至少写出五种）"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-fill">
              <TextArea placeholder="淋浴房玻璃命名有几种,请用 ',' 分割..." autosize={{ minRows: 5, maxRows: 7 }} onChange={(e) => this.handleChange(e,'ques15')}/>
            </div>
          </div>

          {/* 第十六题 */}
          <div className="ques">
            <div className="ques-item">
              <div className="ques-item-id">(16)</div>
              <Input className="ques-item-question" addonAfter="认证" defaultValue="" onChange={(e) => this.handleChange(e,'ques16-before')}/>
            </div>

            <div className="ques-item ques-item-after ques-spe">
              <Input className="ques-item-question ques-item-title"  addonBefore="我们称为欧盟淋浴房产品的测试与认证标准"/>
            </div>

            <div className="ques-item">
              <div className="ques-item-id"></div>
              <Input className="ques-item-question" addonAfter="认证" defaultValue="" onChange={(e) => this.handleChange(e,'ques16-after')}/>
            </div>

            <div className="ques-item ques-item-after ques-spe">
              <Input className="ques-item-question ques-item-title"  addonBefore="是指欧标钢化玻璃的CE认证"/>
            </div>
          </div>

          {/* 第十七题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(17)</div>
              <div className="ques-item-name">欧盟淋浴房的认证标准：在淋浴房门页 启/闭 耐久性实测中，规定了以（10±1）次/min测量频率，一开一关为一次，必须达到</div>
            </div>
            <div className="ques-item ques-item-after">
              <Input className="ques-item-question" addonAfter="次启/闭次数" defaultValue="" onChange={(e) => this.handleChange(e,'ques17-1')}/>
            </div>
            <div className="ques-item ques-spe">
              <div className="ques-item-id"></div>
              <div className="ques-item-name">而 Hüppe Gmbh 内部标准中，规定了其耐久性测试必须达到</div>
            </div>
            <div className="ques-item ques-item-after">
              <Input className="ques-item-question" addonAfter="次" defaultValue="" onChange={(e) => this.handleChange(e,'ques17-2')}/>
            </div>
            <div className="ques-item ques-spe">
              <div className="ques-item-id"></div>
              <Input className="ques-item-question ques-item-title" addonBefore="半框淋浴房墙面安装单边可调范围"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-after">
              <Input className="ques-item-question" addonAfter="KG的负重测试" defaultValue="" onChange={(e) => this.handleChange(e,'ques17-3')}/>
            </div>
          </div>


          {/* 第十八题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(18)</div>
              <Input className="ques-item-question ques-item-title" addonBefore="右侧产品图片，产品命名我们一般描述为"  defaultValue=""/>
            </div>
            <div className="ques-item ques-item-after">
              <Input className="ques-item-question" addonAfter="(如下图所示)" defaultValue="" onChange={(e) => this.handleChange(e,'ques18')}/>
            </div>
            <div className="ques-img">
                <img src={quesImg} alt=""/>
            </div>
          </div>

          {/* 第十九题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">(19)</div>
              <div className="ques-item-name">CCC认证在淋浴房安全性钢化玻璃测试中，强制规定了敲击玻璃后，其50mm x 50mm 区域内的玻璃颗粒状碎片必须大于</div>
            </div>
            <div className="ques-item ques-item-fill">
              <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'ques19')}/>
            </div>
          </div>

          {/* 问答题 */}
          <div className="contentFill">二、问答题</div>

          {/* 第一题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">1、</div>
              <div className="ques-itemlist-name">请全部列出Studio 巴黎/柏林 无框系列，它所有的五金本体色和面壳色的可选项编号。</div>
            </div>
            <div className="ques-item ques-item-fill">
              <TextArea autosize={{ minRows: 5, maxRows: 7 }} onChange={(e) => this.handleChange(e,'quesflex1')}/>
            </div>
          </div>

          {/* 第二题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">2、</div>
              <div className="ques-itemlist-name">菲派有哪些创新技术，请说出5种淋浴房创新技术</div>
            </div>
            <div className="ques-item ques-item-fill">
              <TextArea autosize={{ minRows: 5, maxRows: 7 }} onChange={(e) => this.handleChange(e,'quesflex2')}/>
            </div>
          </div>

          {/* 第三题 */}
          <div className="ques ques-flex">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">3、</div>
              <div className="ques-itemlist-name">请根据下列给出的产品系列，写出其开关门类型，及其相应的开门方式。</div>
            </div>
            <div className="ques-seris">
              <div className="ques-seris-name">1、Paris Berlin巴黎柏林系列:</div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开关门类型（开门或者移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-1-1')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开门方式（内外开，外开，左/右移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-1-2')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">玻璃厚度（mm）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-1-3')}/>
              </div>
            </div>
            <div className="ques-seris">
              <div className="ques-seris-name">2、Enjoy天娇系列:</div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开关门类型（开门或者移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-2-1')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开门方式（内外开，外开，左/右移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-2-2')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">玻璃厚度（mm）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-2-3')}/>
              </div>
            </div>
            <div className="ques-seris">
              <div className="ques-seris-name">3、Golf 高尔夫系列:</div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开关门类型（开门或者移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-3-1')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开门方式（内外开，外开，左/右移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-3-2')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">玻璃厚度（mm）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-3-3')}/>
              </div>
            </div>
            <div className="ques-seris">
              <div className="ques-seris-name">4、Xtensa开拓系列:</div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开关门类型（开门或者移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-4-1')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开门方式（内外开，外开，左/右移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-4-2')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">玻璃厚度（mm）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-4-3')}/>
              </div>
            </div>
            <div className="ques-seris">
              <div className="ques-seris-name">5、DesignPure新设计纯粹系列:</div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开关门类型（开门或者移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-5-1')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开门方式（内外开，外开，左/右移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-5-2')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">玻璃厚度（mm）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-5-3')}/>
              </div>
            </div>
            <div className="ques-seris">
              <div className="ques-seris-name">6、Aura奥拉移移门系列:</div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开关门类型（开门或者移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-6-1')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">开门方式（内外开，外开，左/右移门）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-6-2')}/>
              </div>
              <div className="ques-item ques-spe">
                <div className="ques-item-name">玻璃厚度（mm）</div>
              </div>
              <div className="ques-item ques-item-after">
                <Input className="ques-item-question" defaultValue="" onChange={(e) => this.handleChange(e,'quesflex3-6-3')}/>
              </div>
            </div>
          </div>


          {/* 第四题 */}
          <div className="ques">
            <div className="ques-item ques-spe">
              <div className="ques-item-id">4、</div>
              <div className="ques-itemlist-name">如何区分淋浴房门的开门方向 ，请描述</div>
            </div>
            <div className="ques-item ques-item-fill">
              <TextArea autosize={{ minRows: 5, maxRows: 7 }} onChange={(e) => this.handleChange(e,'quesflex4')}/>
            </div>
          </div>
          {/* 用户信息 */}
          <Modal
            visible={this.state.visible}
            title="提交答题"
            okText="提交"
            cancelText="取消"
            onCancel={this.onCancel}
            onOk={this.onCreate}
          >
            <Form>
              <FormItem
                label="公司名称"
              >
                  <Input onChange={(e) => this.handleUser(e,'company')}/>
              </FormItem>
              <FormItem
                label="店名"
              >
                  <Input onChange={(e) => this.handleUser(e,'shop')}/>
              </FormItem>
              <FormItem
                label="姓名"
              >
                  <Input onChange={(e) => this.handleUser(e,'name')}/>
              </FormItem>
            </Form>
          </Modal>
          <div className="ques-btn">
            <Button onClick={this.handleSubmit}>提交</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
