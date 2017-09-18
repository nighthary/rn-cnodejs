import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomeActions from './state';
import IndexView from './index-view';


const mapStateToProps = ( state ) => ({
  test: state.getIn( [ 'homeState', 'test' ] ),
  nowCount: state.getIn( ['homeState', 'nowCount']),
  activeTab: state.getIn( ['homeState', 'activeTab']),
});
const mapDispathToProps = ( dispath ) => ({
  IndexView: bindActionCreators( HomeActions, dispath ),
  changeTab: bindActionCreators( HomeActions.changeTab, dispath)
});

export default connect( mapStateToProps, mapDispathToProps )( IndexView );
