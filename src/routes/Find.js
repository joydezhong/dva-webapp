import { Component } from 'react';
import { connect } from 'dva';

class Find extends Component{
	render(){
		return (
	    <div>
	      <h1>Find</h1>
	    </div>
	  );
	}
}

Find.propTypes = {
	
};

export default connect()(Find);