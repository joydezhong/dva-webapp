import React from 'react';
import { connect } from 'dva';
import { Router, Route, Link } from 'dva/router';

import { TabBar } from 'antd-mobile';
import Nav from '../components/Nav/Nav';
import styles from './App.css';

import Home from './Home';
import TestPage from './TestPage';
import AboutPage from './AboutPage';
import MyPage from './MyPage';

//function IndexPage({ history }) {
class App extends React.Component{
	constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'HomeTab',
    };
	}
	
	handlePress = (pathname) => {
		this.props.history.push(pathname)
  	console.log(pathname)
  }
	
	render(){
		
		const { history } = this.props;
		
	  return (
	    <Router history={history} >
	      <div className={styles.outBox}>
	      	<Nav handleTouch={(pathname)=>this.handlePress(pathname)}  />
	      	{/*tabbar*/}
		      {/*<div style={{ position: 'fixed', width: '100%', bottom: 0, height: 50 }}>
		        <TabBar
		          unselectedTintColor="#949494"
		          tintColor="#33A3F4"
		          barTintColor="white"
		        >
		          <TabBar.Item
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
		            selected={this.state.selectedTab === 'HomeTab'}
		            onPress={() => {
		              this.setState({
		                selectedTab: 'HomeTab',
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
		            selected={this.state.selectedTab === 'FindTab'}
		            onPress={() => {
		              this.setState({
		                selectedTab: 'FindTab',
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
		            selected={this.state.selectedTab === 'MessageTab'}
		            onPress={() => {
		              this.setState({
		                selectedTab: 'MessageTab',
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
		            selected={this.state.selectedTab === 'MyTab'}
		            onPress={() => {
		              this.setState({
		                selectedTab: 'MyTab',
		              });
		              this.handlePress('/MyPage');
		            }}
		          >
		          </TabBar.Item>
		        </TabBar>
		      </div>*/}
	      	
	        {/*<ul>
	          <li>
	            <Link to="/">Home</Link>
	          </li>
	          <li>
	            <Link to="/TestPage">TestPage</Link>
	          </li>
	          <li>
	            <Link to="/AboutPage">AboutPage</Link>
	          </li>
	        </ul>*/}
					
					<div className={styles.appContainer}>
		        <Route exact path="/" component={Home} />
		        <Route path="/TestPage" component={TestPage} />
		        <Route path="/AboutPage" component={AboutPage} />
		        <Route path="/MyPage" component={MyPage} />
	        </div>
	        
	      </div>
	    </Router>
	  );
	}
}


App.propTypes = {
	
};

export default connect()(App);
