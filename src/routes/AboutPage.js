import { Component } from 'react';
import { connect } from 'dva';

class AboutPage extends Component{
	render(){
		return (
	    <div>
	      <h1>AboutPage</h1>
	    </div>
	  );
	}
}

AboutPage.propTypes = {
};

export default connect()(AboutPage);