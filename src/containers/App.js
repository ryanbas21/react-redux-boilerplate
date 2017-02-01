import React, { Component } from 'react'
import { render } from 'react-dom'
import store  from '../store/store'
import NavBar from '../navbar'
import axios from 'axios';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions'
import { connect } from 'react-redux'
class AppContainer extends Component {
    constructor(props){
        super(props);
        this.submitBlog = this.submitBlog.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(){
      //TODO update logins
      //TODO make ajax call and store to db
      //TODO authenticate
    }

    submitBlog(e,form) {
      e.preventDefaults

      const { editBlog } = actions.default

      axios.post('http://localhost:3000/submitblog', JSON.stringify( { test: 'test'}) )
           .then( result => {
             //TODO update store with result
             console.log(JSON.parse(result), 'returning stuff!' );
             store.dispatch({type:editBlog, value: form})
             return result;
           })
           .catch ( err => console.log(err));
    }


    render() {
        let children = React.Children.map(this.props.children, child => React.cloneElement(child, {
            handleLogin: this.handleLogin,
            submitBlog: this.submitBlog
       }));
        return (
        <div>
            <div>
                <NavBar />
            </div>
                {children}
        </div>
        )
    }
}




function mapStateToProps (state) {
  return {

  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export const connector = connect(mapStateToProps,mapDispatchToProps);

export default AppContainer
