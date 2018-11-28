import { Component } from 'react';
import { connect } from 'dva';

import { SearchBar, Button, WhiteSpace, WingBlank, Carousel, Grid, SegmentedControl, List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component{
	constructor(props){
		super(props)

		this.state = {
	    data: ['1', '2', '3'],
	    imgHeight: 176,
	  }
	}
	
	// componentWillMount() {
 //      this.props.dispatch({
 //        type: 'home/getProductLists',
 //      });
 //  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }

  onValueChange = (value) => {
    console.log(value);
  }
 
	
	render(){

		const gridData = Array.from(new Array(6)).map((v, i) => ({
		  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
		  text: `name${i}`,
		}));

		return (
	    <div>
	      <SearchBar placeholder="搜索" maxLength={8} />

	        <Carousel
	          autoplay={false}
	          infinite
	          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
	          afterChange={index => console.log('slide to', index)}
	        >
	          {this.state.data.map(val => (
	            <a
	              key={val}
	              href="#"
	              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
	            >
	              <img
	                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
	                alt=""
	                style={{ width: '100%', verticalAlign: 'top' }}
	                onLoad={() => {
	                  // fire window resize event to change height
	                  window.dispatchEvent(new Event('resize'));
	                  this.setState({ imgHeight: 'auto' });
	                }}
	              />
	            </a>
	          ))}
	        </Carousel>

      	<Grid data={gridData} columnNum={3} />

      	<SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
          style={{marginTop:'30px'}}
        />

        <List renderHeader={() => 'Subtitle'} className="my-list">
	        <Item
	          arrow="horizontal"
	          multipleLine
	          onClick={() => {}}
	          platform="android"
	        >
	          列表项 <Brief>这也许会有水涟漪效果 <br /> 如果你设置了点击事件。</Brief>
	        </Item>
	      </List>

	    </div>
	  );
	}
}

Home.propTypes = {
	
};

const mapStateToProps = state => {
  return {
    productInfo: state.home.productInfo
  };
};

export default connect(mapStateToProps)(Home);