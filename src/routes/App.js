import React from 'react';
import { connect } from 'dva';
import { Router, Route, Link, Redirect, Switch } from 'dva/router';

import { TabBar } from 'antd-mobile';
import Nav from '../components/Nav/Nav';
import styles from './App.css';

// import Home from './Home';
// import InMobile from './InMobile';
// import OutMobile from './OutMobile';
// import Find from './Find';
// import MyPage from './MyPage';
import routes from '../common/routes';

import Login from './Login';

class App extends React.Component{
	constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'HomeTab',
    };
	}

	// routerWillLeave(nextLocation) {
 //    if (!localStorage.token)
 //      this.props.history.push('#/Login')
 //  },

	handlePress = (pathname) => {
		this.props.history.push(pathname)
  	console.log(pathname)
  }
	
	render(){
		
		const { history } = this.props;
		
	  return (
	    <Router history={history} >
	      <div className={styles.outBox}>
	      {
	      	routes.map(({path, component}, i) => {
        		if(!localStorage.token){
        			return (<Redirect key={i} to="/Login" />)
        		}else if(path == '/'){
			  			return (
			  				<div key={i}>
				  				<Nav handleTouch={(pathname)=>this.handlePress(pathname)}  />
									<div className={styles.appContainer}>
				  					<Route exact path={path} component={component} />
				  				</div>
				  			</div>
			  				)
			  		}else{
			  			return (
			  				<div key={i}>
				  				<Nav handleTouch={(pathname)=>this.handlePress(pathname)}  />
									<div className={styles.appContainer}>
				  					<Route path={path} component={component} />
				  				</div>
				  			</div>
			  				)
			  		}
			  	})
	      }
	      	{/*<Nav handleTouch={(pathname)=>this.handlePress(pathname)}  />
					<div className={styles.appContainer}>*/}


						{/*
						<Route exact path="/" component={Home} />
		        <Route path="/InMobile" component={InMobile} />
		        <Route path="/OutMobile" component={OutMobile} />
		        <Route path="/Find" component={Find} />
		        <Route path="/MyPage" component={MyPage} />
						*/}

		        
	        {/*</div>*/}
	      </div>
	    </Router>
	  );
	}
}


App.propTypes = {
	
};

export default connect()(App);
