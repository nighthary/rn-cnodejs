import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as InfoActions from './state';
import * as HomeActions from '../home/state';
import IndexView from './index-view';

const mapStateToProps = ( state ) => ({
  test: state.getIn( [ 'infoState', 'test' ] ),
  nowCount: state.getIn( ['homeState', 'nowCount'])
});

const mapDispathToProps = ( dispath ) => ({
  InfoActions: bindActionCreators( InfoActions, dispath ),
  homeActions: bindActionCreators( HomeActions, dispath )
});

export default connect( mapStateToProps, mapDispathToProps )( IndexView );
