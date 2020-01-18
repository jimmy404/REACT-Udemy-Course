import React, { Component } from 'react';

export default class ConditionalSection extends Component {
    render() {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                <ComponenteA/>
                <ComponenteB/>
            </div>
        )
    }
}