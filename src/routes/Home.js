import { Component } from 'react';
import { connect } from 'dva';

class Home extends Component{
	constructor(props){
		super(props)
	}
	
	componentWillMount() {
      this.props.dispatch({
        type: 'home/login',
      });
  }
	
	render(){
		return (
	    <div>
	      <h1>Home</h1>
	      <h1>Home</h1>
	      <h1>Home</h1>
	      <h1>Home</h1>
	      <h1>Home</h1>
	      <h1>Home</h1>
	      <h1>Home</h1>
	      <h1>Home</h1>
	      <p>HomeHomeHomeHomeHomeHome</p>
	      <p>HomeHomeHomeHomeHomeHome</p>
	      <p>HomeHomeHomeHomeHomeHome</p>
	      <p>HomeHomeHomeHomeHomeHome</p>
	      <p>HomeHomeHomeHomeHomeHome</p>
	      <p>HomeHomeHomeHomeHomeHome</p>
	      <p>HomeHomeHomeHomeHomeHome</p>
	      <p>HomeHomeHomeHomeHomeHome</p>
	      <p>HomeHomeHomeHomeHomeHome</p>
	      <p>9HomeHomeHomeHomeHomeHome</p>
	      <p>8HomeHomeHomeHomeHomeHome</p>
	      <p>7HomeHomeHomeHomeHomeHome</p>
	      <p>6HomeHomeHomeHomeHomeHome</p>
	      <p>56HomeHomeHomeHomeHomeHome</p>
	      <p>4HomeHomeHomeHomeHomeHome</p>
	      <p>3HomeHomeHomeHomeHomeHome</p>
	      <p>2HomeHomeHomeHomeHomeHome</p>
	      <p>1HomeHomeHomeHomeHomeHome</p>
	    </div>
	  );
	}
}

Home.propTypes = {
	
};

const mapStateToProps = state => {
  return {
    me: state.home.me,
    token: state.home.token
  };
};

export default connect(mapStateToProps)(Home);