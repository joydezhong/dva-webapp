import React from 'react';
//import { connect } from 'dva';
//import { Router, Route, Link } from 'dva/router';

import { TabBar } from 'antd-mobile';

import Menus from '../../common/menus.js';
import styles from './Nav.css';


class Nav extends React.Component{
	constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Home'
    };
	}
	
	componentDidMount(){

	}
	
	render(){
		return (
			<div style={{ position: 'fixed', width: '100%', bottom: 0, height: 50 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#24ad3a"
          barTintColor="white"
        >
        {
        	Menus.map(v=>{
        		return(
        			<TabBar.Item
		            title={v.title}
		            key={v.key}
		            icon={<div style={{
		              width: '22px',
		              height: '22px',
		              background: `url(${v.icon}) center center /  21px 21px no-repeat` }}
		            />
		            }
		            selectedIcon={<div style={{
		              width: '22px',
		              height: '22px',
		              background: `url(${v.selectedIcon}) center center /  21px 21px no-repeat` }}
		            />
		            }
		            selected={this.state.selectedTab === `${v.key}`}
		            onPress={() => {
		              this.setState({
		                selectedTab: `${v.key}`,
		              });
		              	this.props.handleTouch(`${v.route}`);
		            }}
		          >
		          </TabBar.Item>
        		)
        	})
        }
          {/*<TabBar.Item
            title="主页"
            key="Home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'Home'}
            onPress={() => {
              this.setState({
                selectedTab: 'Home',
              });
              this.handlePress('/');
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="发现"
            key="Find"
            selected={this.state.selectedTab === 'Find'}
            onPress={() => {
              this.setState({
                selectedTab: 'Find',
              });
              this.handlePress('/TestPage');
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="消息"
            key="Message"
            selected={this.state.selectedTab === 'Message'}
            onPress={() => {
              this.setState({
                selectedTab: 'Message',
              });
              this.handlePress('/AboutPage');
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="My"
            selected={this.state.selectedTab === 'My'}
            onPress={() => {
              this.setState({
                selectedTab: 'My',
              });
              this.handlePress('/MyPage');
            }}
          >
          </TabBar.Item>*/}
          
        </TabBar>
      </div>
			
		)
	}
}

export default Nav;
