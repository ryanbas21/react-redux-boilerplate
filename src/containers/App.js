import React, { Component } from 'react'
import { render } from 'react-dom'
import { store } from '../store/store'
import NavBar from '../navbar'

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){}
    render() {
        let children = React.Children.map(this.props.children, child => React.cloneElement(child, {
            handleLogin: this.handleLogin
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
