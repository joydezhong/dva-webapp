import React from 'react';
import { connect } from 'dva';
import { Router, Route, Link } from 'dva/router';

import { TabBar } from 'antd-mobile';
import Nav from '../components/Nav/Nav';
import styles from './App.css';

import routes from '../common/routes';

// import Home from './Home';
// import InMobile from './InMobile';
// import OutMobile from './OutMobile';
// import Find from './Find';
// import MyPage from './MyPage';

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
					
					<div className={styles.appContainer}>
		        {/*<Route exact path="/" component={Home} />
		        <Route path="/InMobile" component={InMobile} />
		        <Route path="/OutMobile" component={OutMobile} />
		        <Route path="/Find" component={Find} />
		        <Route path="/MyPage" component={MyPage} />*/}
		        {
		        	routes.map(({path, component}, i) => {
					  		if(path == '/'){
					  			return (<Route exact path={path} component={component} />)
					  		}else{
					  			return (<Route path={path} component={component} />)
					  		}
					  	})
		        }
	        </div>
	        
	      </div>
	    </Router>
	  );
	}
}


App.propTypes = {
	
};

export default connect()(App);
