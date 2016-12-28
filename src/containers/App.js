import React, { Component } from 'react'
import { render } from 'react-dom'
import { store } from '../store/store'
import NavBar from '../navbar'

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this)
    }
    login(){}
    render() {
        let children = React.Children.map(this.props.children, child => React.cloneElement(child, {
            login: this.login
       }));
        return (
            <div>
                <NavBar />
            <div>
                {children}
            </div>
            </div>
        )
    }
}


export default AppContainer
