import { Component } from 'react';
import { connect } from 'dva';

class MyPage extends Component{
	render(){
		return (
	    <div>
	      <h1>MyPage</h1>
	    </div>
	  );
	}
}

MyPage.propTypes = {
};

export default connect()(MyPage);