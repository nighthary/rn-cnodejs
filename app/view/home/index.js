import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomeActions from './state';
import IndexView from './index-view';


const mapStateToProps = ( state ) => ({
  test: state.getIn( [ 'homeState', 'test' ] ),
  nowCount: state.getIn( ['homeState', 'nowCount'])
});
const mapDispathToProps = ( dispath ) => ({
  IndexView: bindActionCreators( HomeActions, dispath )
});

export default connect( mapStateToProps, mapDispathToProps )( IndexView );
