import { Component } from 'react';
import { connect } from 'dva';

class OutMobile extends Component{
	render(){
		return (
	    <div>
	      <h1>OutMobile</h1>
	    </div>
	  );
	}
}

OutMobile.propTypes = {
	
};

export default connect()(OutMobile);