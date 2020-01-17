import React,{Component} from 'react';
import { Carousel,Collapse,Tag   } from 'antd';
import Banner01 from '../../assets/images/home/banner01.jpg';
import Banner02 from '../../assets/images/home/banner02.jpg';
import Banner03 from '../../assets/images/home/banner03.jpg';
import Banner04 from '../../assets/images/home/banner04.jpg';

import './Home.less';
const { Panel } = Collapse;

export default class Home extends Component{
    constructor(props){
        super(props);
        // fetch("/news",{method:'GET'}).then(
        //     function(res){
        //         console.log(res);
        //         res.json().then(function(data){
        //             console.log(data)
        //         })
        //     }
        // )
    }
    render(){
      const text1 = `
        杨慧，女，典型九五后。本科毕业于贵州师范学院，电子信息科学与技术专业。爱好滑雪、桌球、乒乓球、小说、电影、游泳。职业Web前端工程师。      
      `;
      const text2 = [{"content":"HTML/HTML5","color":"magenta"},
      {"content":"CSS/CSS3","color":"red"},
      {"content":"JavaScript","color":"volcano"},
      {"content":"Jquery","color":"orange"},
      {"content":"React","color":"gold"},
      {"content":"Vue","color":"lime"},
      {"content":"Trao","color":"green"},
      {"content":"微信小程序","color":"cyan"}];
      ;
      const text3 = `
        得意淡然，失意坦然；喜而不狂，忧而不伤。
      `;
        return (
            <div id="Home">
                <Carousel autoplay>
                    <div>
                      <img src={Banner01} class="img-responsive" alt="轮播图"/>
                    </div>
                    <div>
                      <img src={Banner02} class="img-responsive" alt="轮播图"/>
                    </div>
                    <div>
                      <img src={Banner03} class="img-responsive" alt="轮播图"/>
                    </div>
                    <div>
                      <img src={Banner04} class="img-responsive" alt="轮播图"/>
                    </div>
                </Carousel>
                <Collapse accordion defaultActiveKey={['1']}>
                  <Panel header="个人简介" key="1" showArrow={false}>
                    <p>{text1}</p>
                  </Panel>
                  <Panel header="职场技能" key="2" showArrow={false}>
                    <p>
                      {text2.map((item)=>{
                        return <Tag color={item.color}>{item.content}</Tag>
                      })}
                    </p>
                  </Panel>
                  <Panel header="人生格言" key="3" showArrow={false}>
                    <p>{text3}</p>
                  </Panel>
                </Collapse>
            </div>
        )
    }
}