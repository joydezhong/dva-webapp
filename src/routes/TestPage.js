import { Component } from 'react';
import { connect } from 'dva';

class TestPage extends Component{
	render(){
		return (
	    <div>
	      <h1>TestPage</h1>
	    </div>
	  );
	}
}

TestPage.propTypes = {
	
};

export default connect()(TestPage);