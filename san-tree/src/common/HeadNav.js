import React,{Component} from 'react';
import {Menu,Icon,Row, Col,Avatar } from 'antd';
import './HeadNav.less'
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.jpg';

 export default class HeadNav extends Component{
     constructor(props){
         super(props);
         var location = this.props.location.pathname.split('/');
         var currentName = location[location.length-1]?location[location.length-1]:'home';
         this.state={
             current:currentName
         }
     }

     handleClick=(e)=>{
         this.setState({current:e.key})
     }

     render(){
         return (
             <div id="HeadNav">
                <Row>
                    <Col span={4}>
                        <Avatar src={Logo} />
                    </Col>
                    <Col span={20}>
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            onClick={this.handleClick}
                        >
                            <Menu.Item key="home">
                                <Link to="/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/home/about">关于我</Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link to="/home/article">文章分享</Link>
                            </Menu.Item>
                            <Menu.Item key="resource">
                                <Link to="/home/resource">资源共享</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
             </div>
         )
     }
 }