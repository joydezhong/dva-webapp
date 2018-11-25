import { Component } from 'react';
import { connect } from 'dva';

class InMobile extends Component{
	render(){
		return (
	    <div>
	      <h1>InMobile</h1>
	    </div>
	  );
	}
}

InMobile.propTypes = {
	
};

export default connect()(InMobile);