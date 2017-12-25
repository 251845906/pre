import React, { Component } from 'react';

import './Index.css';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    handleClick = () => {
        fetch('http://127.0.0.1/test', {
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'name=wang&phone=123'
        }).then((res) => (res.json())).then(data => (console.log(data)))
    }
    render() {

        return (
            <div>
               
            </div>
        );
    }
}

export default Index;