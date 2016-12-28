import React, { Component } from 'react'
import { render } from 'react-dom'


class AppContainer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <p>Testing</p>
            </div>
        )
    }
}


render(<AppContainer />, document.getElementById('root'));
