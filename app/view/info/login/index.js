import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from './state';
import IndexView from './index-view';


const mapStateToProps = ( state ) => ({
  test: state.getIn( [ 'homeState', 'test' ] ),
  nowCount: state.getIn( ['homeState', 'nowCount'])
});
const mapDispathToProps = ( dispath ) => ({
  LoginActions: bindActionCreators( LoginActions, dispath )
});

export default connect( mapStateToProps, mapDispathToProps )( IndexView );
