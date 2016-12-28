import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';
import { connect } from 'react-redux'
// import * as types from 'actions/actions';
const mapStateToProps = {};
const mapDispatchToProps = {};

const store = createStore(rootReducer);
const connector = connect(mapStateToProps,mapDispatchToProps);

export default { store, connector };
