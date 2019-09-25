import React, { Component } from 'react';
import { Text } from 'native-base';

export default class Screen1 extends Component {
    render() {
        return (
            <Text style={{ alignSelf: 'center' }}>{this.props.title || 'Please Add title'}</Text>
        );
    }
}
