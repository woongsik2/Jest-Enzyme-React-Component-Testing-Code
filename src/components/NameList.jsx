import React, { Component } from 'react';

class NameList extends Component {
    static defultProps = {
        names: []
    }
    renderList(){
        const {names} = this.props;
        const NameList = names.map(
            (name, i) => (<li key={i}>{name}</li>)
        );
        return NameList;
    }
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default NameList;