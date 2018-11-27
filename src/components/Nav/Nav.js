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
          
        </TabBar>
      </div>
			
		)
	}
}

export default Nav;
