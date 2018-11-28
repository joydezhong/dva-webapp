import { Component } from 'react';
import { connect } from 'dva';

import { SearchBar } from 'antd-mobile';


class Login extends Component{
	constructor(props){
		super(props)

		this.state = {
	    
	  }
	}
	
	componentWillMount() {
      this.props.dispatch({
        type: 'login/login',
      });
  }

	render(){

		return (
	    <div>
	      <SearchBar placeholder="搜索" maxLength={8} />
	      <p>666666666666</p>
	    </div>
	  );
	}
}

Login.propTypes = {
	
};

const mapStateToProps = state => {
  return {
    token: state.login.token
  };
};

export default connect(mapStateToProps)(Login);