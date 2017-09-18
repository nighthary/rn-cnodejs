import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MyInfoActions from './state';
import IndexView from './index-view';


const mapStateToProps = ( state ) => ({
  test: state.getIn( [ 'homeState', 'test' ] ),
  nowCount: state.getIn( ['homeState', 'nowCount'])
});
const mapDispathToProps = ( dispath ) => ({
  MyInfoActions: bindActionCreators( MyInfoActions, dispath )
});

export default connect( mapStateToProps, mapDispathToProps )( IndexView );
