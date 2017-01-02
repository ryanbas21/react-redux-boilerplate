import React, { Component } from 'react'
import { render } from 'react-dom'
import { store } from '../store/store'
import NavBar from '../navbar'
import axios from 'axios';

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.submitBlog = this.submitBlog.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){}
    submitBlog(blog){
        axios.post('/submitblog',{ blog })
             .then( response => {
                 console.log(response);
             })
             .catch( err => console.log(err))
    }
    render() {
        let children = React.Children.map(this.props.children, child => React.cloneElement(child, {
            handleLogin: this.handleLogin
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


export default AppContainer
